import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatRadioModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() categories!: string[];
  @Input() selectedCategory!: string;
  @Output() sendCategory = new EventEmitter<string>(); // Output event added in the component tag

  onChangeCategory(data: any) {
    this.sendCategory.emit(data);
  }
}
