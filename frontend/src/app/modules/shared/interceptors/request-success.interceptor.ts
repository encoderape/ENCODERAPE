import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageType } from 'src/app/modules/shared/enums/message-type';
import { CodeType } from 'src/app/modules/shared/enums/code-type';
import { ResponseType } from 'src/app/modules/shared/enums/response-type';
import { ToastMessageType } from 'src/app/modules/shared/enums/toast-message-type';
import { ToastService } from 'src/app/modules/shared/services/toast.service';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { Log } from 'src/app/modules/shared/models/log';

@Injectable()
export class RequestSuccessInterceptor implements HttpInterceptor {
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
      tap((event: HttpHeaderResponse) => {
        if (event.status === ResponseType.OK) {
          log.code = ResponseType.OK;
          log.error = MessageType.OK;
          this.loggerService.console(log, CodeType.SUCCESS);
          return;
        }
        if (event.status === ResponseType.CREATED) {
          log.code = ResponseType.CREATED;
          log.error = MessageType.CREATED;
          this.loggerService.console(log, CodeType.SUCCESS);
          this.toastService.callSuccessfulToast(ToastMessageType.CREATED);
          this.router.navigate(['/']);
        }
      })
    );
  }
}
