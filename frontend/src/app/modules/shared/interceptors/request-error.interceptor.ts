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
import { ResponseType } from 'src/app/modules/shared/enums/response-type';
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
          log.code = 400;
          log.error =
            'La URL a la que se ha intentado hacer la petición está mal.';
          this.loggerService.insert(log);
          this.loggerService.console(log);
          this.toastService.callErrorToast(
            'Petición equivocada, ponte en contacto con nosotros si el problema persiste.'
          );
          return throwError(err);
        }
        if (err.status === ResponseType.NOT_FOUND) {
          log.code = 404;
          log.error = 'Se ha intentado buscar algo que no existe.';
          this.loggerService.insert(log);
          this.loggerService.console(log);
          this.toastService.callErrorToast(
            'No se ha podido encontrar lo que buscas, ponte en contacto con nosotros si el problema persiste.'
          );
          return throwError(err);
        }
        if (err.status === ResponseType.SERVER_ERROR) {
          log.code = 500;
          log.error = 'Ha habido un error interno del servidor.';
          this.loggerService.insert(log);
          this.loggerService.console(log);
          this.toastService.callErrorToast(
            'Error interno del servidor, ponte en contacto con nosotros si el problema persiste.'
          );
          return throwError(err);
        }
      })
    );
  }
}
