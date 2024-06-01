import { Component } from '@angular/core';
import { ModalService } from '../shared/component/modal/modal.service';
import {
  TEMPLATE_BACKEND,
  TEMPLATE_FRONTEND,
  TEMPLATE_GITHUB,
  TEMPLATE_PREREQUIS,
  Template_DELIVERY,
  Template_EXAMPLE,
} from './constants/templates.const';

@Component({
  selector: 'app-kata',
  templateUrl: './kata.component.html',
  styleUrls: ['./kata.component.scss'],
})
export class KataComponent {
  public templatePrerequis = TEMPLATE_PREREQUIS;
  public templateGithub = TEMPLATE_GITHUB;
  public templateBackend = TEMPLATE_BACKEND;
  public templateFrontend = TEMPLATE_FRONTEND;
  public templateExample = Template_EXAMPLE;
  public templateDelivery= Template_DELIVERY;
  constructor(private modalService: ModalService) {}

  public openModal(): void {
    this.modalService.open();
  }
}
