import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription, finalize, map, take } from 'rxjs';

import { ModalService } from '../../../shared/component/modal/modal.service';
import { FormsService } from '../../services/utils/forms.service';
import { KataBackendService } from '../../services/kata-backend.service';
import { InputForm } from '../../interfaces/input-form.interface';
import { TextError } from '../../enums/text-error.enum';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public form!: FormGroup<InputForm>;
  public output$: BehaviorSubject<String> = new BehaviorSubject<String>('');
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(
    public modalService: ModalService,
    private formsService: FormsService,
    private service: KataBackendService
  ) {}

  ngOnInit(): void {
    this.initVariables();
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => sub.unsubscribe());
  }

  private initVariables(): void {
    this.form = this.formsService.generateCardForm();
  }

  public onClickSubmit(): void {
    if (this.form.valid) {
      this.isLoading$.next(true);
      const sub = this.service
        .convertInputToOutPut(this.form.controls.input.value)
        .pipe(
          take(1),
          map((output: String) => this.output$.next(output)),
          finalize(() => this.isLoading$.next(false))
        )
        .subscribe();
      this.subscriptions.push(sub);
    } else {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
  }

  public closeModal(): void {
    this.output$.next('');
    this.form.reset();
    this.modalService.close();
  }

  get f(): InputForm {
    return this.form.controls;
  }

  get showError(): boolean {
    return !this.f.input.valid && (this.f.input.touched || this.f.input.dirty);
  }

  get textError(): TextError {
    return this.f.input.getError('required')
      ? TextError.REQUIRED
      : this.f.input.getError('min') || this.f.input.getError('max')
      ? TextError.RANGE
      : this.f.input.getError('pattern')
      ? TextError.PATTERN
      : TextError.DEFAULT;
  }
}
