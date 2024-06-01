import { NgModule } from "@angular/core";
import { KataComponent } from "./kata.component";
import { KataRoutingModule } from "./kata-routing.module";
import { ModalComponent } from '../shared/component/modal/modal.component';
import { SharedModule } from "../shared/shared.module";
import { ModalFormComponent } from './components/modal-form/modal-form.component';


@NgModule({
    declarations: [KataComponent, ModalFormComponent],
    imports: [KataRoutingModule, SharedModule],
    providers:[ModalComponent],
   
  })
  export class KataModule {}