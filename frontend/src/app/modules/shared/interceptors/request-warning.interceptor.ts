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
import { ResponseType } from 'src/app/modules/shared/enums/response-type';
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
          log.code = 401;
          log.error = 'No tienes acceso a este contenido.';
          this.loggerService.insert(log);
          this.loggerService.console(log);
          this.toastService.callWarningToast(
            'Está intentando acceder a una URL a la que solo los administradores pueden acceder.'
          );
          this.router.navigate(['/']);
          return throwError(err);
        }
      })
    );
  }
}
