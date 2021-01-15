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
          log.code = 200;
          log.error = 'Datos obtenidos correctamente.';
          this.loggerService.console(log, 'green');
          return;
        }
        if (event.status === ResponseType.CREATED) {
          log.code = 201;
          log.error = 'Datos insertados correctamente.';
          this.loggerService.console(log, 'green');
          this.toastService.callSuccessfulToast('Formulario enviado con éxito');
          this.router.navigate(['/']);
        }
      })
    );
  }
}
