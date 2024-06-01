import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOrdredListComponent } from './template-ordred-list.component';

describe('TemplateOrdredListComponent', () => {
  let component: TemplateOrdredListComponent;
  let fixture: ComponentFixture<TemplateOrdredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOrdredListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateOrdredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
