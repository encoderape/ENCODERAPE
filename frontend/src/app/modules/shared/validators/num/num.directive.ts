import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { numValidator } from 'src/app/modules/shared/validators/num/num.validator';

@Directive({
  selector: '[num]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumDirective,
      multi: true,
    },
  ],
})
export class NumDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    return numValidator()(control);
  }
}
