import { Component, Input } from '@angular/core';
import { OrdredListWithLink } from '../../interfaces/template-ordred-list.interface';

@Component({
  selector: 'app-template-ordred-list',
  templateUrl: './template-ordred-list.component.html',
  styleUrls: ['./template-ordred-list.component.scss'],
})
export class TemplateOrdredListComponent {
  @Input() title?: String;
  @Input() paragraph!: String;
  @Input() list?: String[];
  @Input() listWithLink? : OrdredListWithLink[]; 
}
