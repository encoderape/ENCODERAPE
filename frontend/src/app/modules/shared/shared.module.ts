import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRouting } from 'src/app/modules/shared/shared.routing';
import { HomeComponent } from 'src/app/modules/shared/home/home.component';
import { PageNotFoundComponent } from 'src/app/modules/shared/page-not-found/page-not-found.component';
import { HeaderComponent } from 'src/app/modules/shared/header/header.component';
import { NavigatorComponent } from 'src/app/modules/shared/navigator/navigator.component';
import { FooterComponent } from 'src/app/modules/shared/footer/footer.component';
import { NumDirective } from 'src/app/modules/shared/validators/num/num.directive';
import { TextDirective } from 'src/app/modules/shared/validators/text/text.directive';
import { EmailDirective } from 'src/app/modules/shared/validators/email/email.directive';
import { SuccessfulComponent } from 'src/app/modules/shared/toasts/successful/successful.component';
import { WarningComponent } from 'src/app/modules/shared/toasts/warning/warning.component';
import { InfoComponent } from 'src/app/modules/shared/toasts/info/info.component';
import { ErrorComponent } from 'src/app/modules/shared/toasts/error/error.component';
import { PhoneDirective } from './validators/phone/phone.directive';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavigatorComponent,
    FooterComponent,
    NumDirective,
    TextDirective,
    EmailDirective,
    SuccessfulComponent,
    WarningComponent,
    InfoComponent,
    ErrorComponent,
    PhoneDirective,
  ],
  exports: [
    HeaderComponent,
    NavigatorComponent,
    FooterComponent,
    NumDirective,
    TextDirective,
    EmailDirective,
    SuccessfulComponent,
    WarningComponent,
    ErrorComponent,
    InfoComponent,
    PhoneDirective,
  ],
  imports: [CommonModule, SharedRouting],
})
export class SharedModule {}
