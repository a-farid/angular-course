import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { IFilters } from '../../models/products.model';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatRadioModule, CommonModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Input() categories!: string[];
  @Input() filter!: IFilters;
  @Output() sendCategory = new EventEmitter<string>(); // Output event added in the component tag
  @Output() sendStock = new EventEmitter<string>(); // Output event added in the component tag

  onChangeCategory(data: any) {
    this.sendCategory.emit(data);
  }
  onChangeStock(data: any) {
    this.sendStock.emit(data);
  }
}
