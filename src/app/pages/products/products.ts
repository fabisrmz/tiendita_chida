import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './products.html',
})
export class Products {

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
