import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modal!: ModalComponent;

  add(modal: ModalComponent) {
    this.modal = modal;
  }

  remove(modal: ModalComponent) {
    modal.close();
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}
