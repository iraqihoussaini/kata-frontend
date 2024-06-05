import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KataComponent } from './kata.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { MainComponent } from '../shared/component/main/main.component';
import { SpinnerComponent } from '../shared/component/spinner/spinner.component';
import { TemplateOrdredListComponent } from '../shared/component/template-ordred-list/template-ordred-list.component';
import { TableComponent } from '../shared/component/table/table.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalComponent } from '../shared/component/modal/modal.component';

describe('KataComponent', () => {
  let component: KataComponent;
  let fixture: ComponentFixture<KataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ KataComponent, HeaderComponent, MainComponent, SpinnerComponent, TemplateOrdredListComponent, TableComponent, ModalFormComponent, ModalComponent ], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(KataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', (done) => {
    let modalEl = document.querySelector('app-modal') as HTMLElement;
    expect(modalEl.style.display).toBe('none');
    component.openModal()
    fixture.detectChanges();
    modalEl = document.querySelector('app-modal') as HTMLElement;
    expect(modalEl.style.display).toBe('block');
    done();
  });

  it('should close modal', (done) => {
    let modalEl = document.querySelector('app-modal') as HTMLElement;
    expect(modalEl.style.display).toBe('none');
    component.openModal()
    fixture.detectChanges();
    modalEl = document.querySelector('app-modal') as HTMLElement;
    expect(modalEl.style.display).toBe('block');
    
    const btnClose = modalEl = document.querySelector('.btn.btn-secondary') as HTMLElement;

    btnClose.click();
    fixture.detectChanges();
    modalEl = document.querySelector('app-modal') as HTMLElement;
    expect(modalEl.style.display).toBe('none');
    done();
  });
});
