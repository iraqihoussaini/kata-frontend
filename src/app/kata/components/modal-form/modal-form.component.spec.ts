import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ModalFormComponent } from './modal-form.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { KataBackendService } from '../../services/kata-backend.service';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { TextError } from '../../enums/text-error.enum';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ModalFormComponent', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ModalFormComponent, ModalComponent],
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        BrowserModule],
    providers: [
        {
            provide: KataBackendService,
            useValue: {
                // adding custom behavior to the service
                convertInputToOutPut: jasmine.createSpy().and.returnValue(of('1')),
            },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
}).compileComponents();

    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should input field be invalid by default', () => {
    expect(component.form.controls.input.valid).toBeFalse();
  });

  it('should input field be invalid when value is less than 0', () => {
    let input = component.form.controls.input;
    input.setValue(-1);
    expect(input.valid).toBeFalse();
    expect(input.invalid).toBeTruthy();
  });

  it('should input field be invalid when value is great than 100', () => {
    let input = component.form.controls.input;
    input.setValue(101);
    expect(input.valid).toBeFalse();
    expect(input.invalid).toBeTruthy();
  });

  it('should input field be invalid when value is not include in range', () => {
    let input = component.form.controls.input;
    // example string
    input.setValue('101' as any);
    expect(input.valid).toBeFalse();
    expect(input.invalid).toBeTruthy();
    // example float
    input.setValue(1.99);
    expect(input.valid).toBeFalse();
    expect(input.invalid).toBeTruthy();
  });

  it('should display REQUIRED error msg', () => {
    let btnSubmit = document.querySelector(
      '.modal .btn-primary'
    ) as HTMLElement;
    btnSubmit.click();
    fixture.detectChanges();

    const errorMsg = document.querySelector(
      '.invalid-feedback.d-block'
    ) as HTMLElement;
    expect(errorMsg.textContent?.trim()).toBe(TextError.REQUIRED);
  });

  it('should display RANGE error msg', () => {
    const input = component.form.controls.input;
    // MAX
    input.setValue(101);
    let btnSubmit = document.querySelector(
      '.modal .btn-primary'
    ) as HTMLElement;
    btnSubmit.click();
    fixture.detectChanges();
    let errorMsg = document.querySelector(
      '.invalid-feedback.d-block'
    ) as HTMLElement;
    expect(errorMsg.textContent?.trim()).toBe(TextError.RANGE);
    // MIN
    input.setValue(-2);
    btnSubmit = document.querySelector('.modal .btn-primary') as HTMLElement;
    btnSubmit.click();
    fixture.detectChanges();
    errorMsg = document.querySelector(
      '.invalid-feedback.d-block'
    ) as HTMLElement;
    expect(errorMsg.textContent?.trim()).toBe(TextError.RANGE);
  });

  it('should display RANGE error msg', () => {
    const input = component.form.controls.input;
    input.setValue('error' as any);
    let btnSubmit = document.querySelector(
      '.modal .btn-primary'
    ) as HTMLElement;
    btnSubmit.click();
    fixture.detectChanges();
    let errorMsg = document.querySelector(
      '.invalid-feedback.d-block'
    ) as HTMLElement;
    expect(errorMsg.textContent?.trim()).toBe(TextError.PATTERN);
  });

  it('should display DEFAULT error msg', () => {
    const input = component.form.controls.input;
    input.setErrors({ customError: true });
    let btnSubmit = document.querySelector(
      '.modal .btn-primary'
    ) as HTMLElement;
    btnSubmit.click();
    fixture.detectChanges();
    let errorMsg = document.querySelector(
      '.invalid-feedback.d-block'
    ) as HTMLElement;
    expect(errorMsg.textContent?.trim()).toBe(TextError.DEFAULT);
  });
  it('should submit form and display output', () => {
    const input = component.form.controls.input;
    input.setValue(1);
    component.onClickSubmit();
    fixture.detectChanges();
    expect(component.output$.value).toEqual('1');
    component.ngOnDestroy();
  });
});
