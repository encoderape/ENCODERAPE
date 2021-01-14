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

@Injectable()
export class RequestErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === ResponseType.BAD_REQUEST) {
          this.toastService.callErrorToast(
            'Petición equivocada, ponte en contacto con nosotros si el problema persiste'
          );
          return throwError(err);
        }
        if (err.status === ResponseType.NOT_FOUND) {
          this.toastService.callErrorToast(
            'No se ha podido encontrar lo que buscas, ponte en contacto con nosotros si el problema persiste'
          );
          return throwError(err);
        }
        if (err.status === ResponseType.SERVER_ERROR) {
          this.toastService.callErrorToast(
            'Error interno del servidor, ponte en contacto con nosotros si el problema persiste'
          );
          return throwError(err);
        }
      })
    );
  }
}
