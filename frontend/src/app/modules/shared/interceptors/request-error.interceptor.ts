import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CodeType } from 'src/app/modules/shared/enums/code-type';
import { MessageType } from 'src/app/modules/shared/enums/message-type';
import { ResponseType } from 'src/app/modules/shared/enums/response-type';
import { ToastMessageType } from 'src/app/modules/shared/enums/toast-message-type';
import { ToastService } from 'src/app/modules/shared/services/toast.service';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { Log } from 'src/app/modules/shared/models/log';

@Injectable()
export class RequestErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastService: ToastService,
    private loggerService: LoggerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const log: Log = {
      code: 0,
      error: '',
    };
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === ResponseType.BAD_REQUEST) {
          log.code = ResponseType.BAD_REQUEST;
          log.error = MessageType.BAD_REQUEST;
          this.loggerService.insert(log);
          this.loggerService.console(log, CodeType.ERROR);
          this.toastService.callErrorToast(ToastMessageType.BAD_REQUEST);
          return throwError(err);
        }
        if (err.status === ResponseType.NOT_FOUND) {
          log.code = ResponseType.NOT_FOUND;
          log.error = MessageType.NOT_FOUND;
          this.loggerService.insert(log);
          this.loggerService.console(log, CodeType.ERROR);
          this.toastService.callErrorToast(ToastMessageType.NOT_FOUND);
          return throwError(err);
        }
        if (err.status === ResponseType.SERVER_ERROR) {
          log.code = ResponseType.SERVER_ERROR;
          log.error = MessageType.SERVER_ERROR;
          this.loggerService.insert(log);
          this.loggerService.console(log, CodeType.ERROR);
          this.toastService.callErrorToast(ToastMessageType.SERVER_ERROR);
          return throwError(err);
        }
      })
    );
  }
}
