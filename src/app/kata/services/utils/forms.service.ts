import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputForm } from '../../interfaces/input-form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(private fb: FormBuilder) {}

  public generateCardForm(): FormGroup<InputForm> {
    return this.fb.group({
      input: new FormControl<number>(
        { value: null!, disabled: false },
        {
          nonNullable: true,
          validators: [
            Validators.min(0),
            Validators.max(100),
            Validators.required,
            Validators.pattern('^(0|[1-9][0-9]?|100)$'),
          ],
        }
      ),
    });
  }
}
