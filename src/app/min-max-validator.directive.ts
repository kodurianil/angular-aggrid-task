import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS,  ValidationErrors,  Validator } from '@angular/forms';

@Directive({
  selector: '[appMinMaxValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinMaxValidatorDirective, multi: true}]
})
export class MinMaxValidatorDirective implements Validator {
  @Input('minlength') minLength;
  @Input('maxlength') maxLength;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = ((control.value || '') + '').length;
    return !((+this.minLength) <= value && value <= (+this.maxLength)) ? {'minMaxError': true} : null
  }

}