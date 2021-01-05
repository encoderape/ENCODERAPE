import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { textValidator } from 'src/app/modules/shared/validators/text/text.validator';

@Directive({
  selector: '[text]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TextDirective,
      multi: true,
    },
  ],
})
export class TextDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    return textValidator()(control);
  }
}
