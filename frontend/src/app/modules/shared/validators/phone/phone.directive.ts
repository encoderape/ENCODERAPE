import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { phoneValidator } from 'src/app/modules/shared/validators/phone/phone.validator.';

@Directive({
  selector: '[tlf]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneDirective,
      multi: true,
    },
  ],
})
export class PhoneDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneValidator()(control);
  }
}
