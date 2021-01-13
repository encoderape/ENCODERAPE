import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ContactoRouting } from 'src/app/modules/contacto/contacto.routing';
import { ContactoComponent } from 'src/app/modules/contacto/contacto/contacto.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ContactoErrorInterceptor } from './interceptors/contacto-error.interceptor';
import { ContactoService } from './services/contacto.service';
import { ContactoSuccessInterceptor } from './interceptors/contacto-success.interceptor';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRouting, FormsModule, SharedModule],
  providers: [
    ContactoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContactoErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContactoSuccessInterceptor,
      multi: true,
    },
  ],
})
export class ContactoModule {}
