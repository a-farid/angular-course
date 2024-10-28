import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Output() nameSent = new EventEmitter<{ id: number; content: string }>();
  @Input() product!: IProduct;
  name: string = '';
  sendData() {
    this.nameSent.emit({ id: this.product.id, content: this.name });
  }
  updateName(e: any) {
    this.name = e.target.value;
  }
}
