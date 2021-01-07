import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function numValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    return !/^[0-9]/.test(control.value) ? { num: true } : null;
  };
}
