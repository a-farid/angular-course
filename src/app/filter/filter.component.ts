import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatRadioModule, CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Input() categories!: string[];
  @Output() categoryChange = new EventEmitter<string>();
  @Output() stockChange = new EventEmitter<string>();

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  onCategoryChange(e: any) {
    this.categoryChange.emit(e.target.value);
  }
  onStockChange(e: any) {
    this.stockChange.emit(e.target.value);
  }
}
