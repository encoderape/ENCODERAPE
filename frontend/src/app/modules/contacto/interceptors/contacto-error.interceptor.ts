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
export class ContactoErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === ResponseType.BAD_REQUEST) {
          console.log('error');
          this.toastService.callErrorToast(
            'Error interno del servidor, inténtelo de nuevo por favor, si el problema persiste, ponte en contacto con asistencia al cliente'
          );
          return throwError(err);
        }
      })
    );
  }
}
