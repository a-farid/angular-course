import { Component, Input } from '@angular/core';
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
}
