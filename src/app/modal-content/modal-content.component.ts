import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="close()"
      ></button>
    </div>
    <div class="modal-body">
      <p>{{ body }}</p>
    </div>
  `,
})
export class ModalContentComponent {
  @Input() title = '';
  @Input() body = '';

  constructor(private activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }
}
