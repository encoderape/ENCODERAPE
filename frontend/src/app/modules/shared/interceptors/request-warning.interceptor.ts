import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageType } from 'src/app/modules/shared/enums/message-type';
import { CodeType } from 'src/app/modules/shared/enums/code-type';
import { ResponseType } from 'src/app/modules/shared/enums/response-type';
import { ToastMessageType } from 'src/app/modules/shared/enums/toast-message-type';
import { ToastService } from 'src/app/modules/shared/services/toast.service';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { Log } from 'src/app/modules/shared/models/log';

@Injectable()
export class RequestWarningInterceptor implements HttpInterceptor {
  constructor(
    private toastService: ToastService,
    private router: Router,
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
        if (err.status === ResponseType.UNAUTOHORIZED) {
          log.code = ResponseType.UNAUTOHORIZED;
          log.error = MessageType.UNAUTHORIZED;
          this.loggerService.insert(log);
          this.loggerService.console(log, CodeType.WARNING);
          this.toastService.callWarningToast(ToastMessageType.UNAUTHORIZED);
          this.router.navigate(['/']);
          return throwError(err);
        }
      })
    );
  }
}
