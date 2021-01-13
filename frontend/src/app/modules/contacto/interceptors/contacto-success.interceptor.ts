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

import { ResponseType } from 'src/app/modules/shared/enums/response-type';
import { ToastService } from 'src/app/modules/shared/services/toast.service';

@Injectable()
export class ContactoSuccessInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpHeaderResponse) => {
        if (event.status === ResponseType.OK) {
          this.toastService.callSuccessfulToast('Formulario enviado con éxito');
          this.router.navigate(['/']);
        }
      })
    );
  }
}
