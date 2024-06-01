import { Component, Input } from '@angular/core';
import { Body } from '../../interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() title!: String;
  @Input() header!: String[];
  @Input() body!: Body[];
}
