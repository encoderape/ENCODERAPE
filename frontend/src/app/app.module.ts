import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRouting } from 'src/app/app.routing';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RequestErrorInterceptor } from 'src/app/modules/shared/interceptors/request-error.interceptor';
import { RequestSuccessInterceptor } from 'src/app/modules/shared/interceptors/request-success.interceptor';
import { RequestWarningInterceptor } from 'src/app/modules/shared/interceptors/request-warning.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestSuccessInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestWarningInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
