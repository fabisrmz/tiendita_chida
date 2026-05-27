import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
})
export class Modal {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
