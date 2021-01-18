import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { emailValidator } from 'src/app/modules/shared/validators/email/email.validator';

@Directive({
  selector: '[email]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator()(control);
  }
}
