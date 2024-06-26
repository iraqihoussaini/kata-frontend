import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TemplateOrdredListComponent } from './component/template-ordred-list/template-ordred-list.component';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { ModalComponent } from './component/modal/modal.component';
import { MainComponent } from './component/main/main.component';
import { SpinnerComponent } from './component/spinner/spinner.component';

const shared = [
  ModalComponent,
  TemplateOrdredListComponent,
  TableComponent,
  HeaderComponent,
  MainComponent,
  SpinnerComponent
];
@NgModule({ declarations: [...shared],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ...shared,
    ], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
