import {
  Component,
  effect,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFilters, IProduct } from '../../models/products.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnChanges {
  @Input() products: IProduct[] = [];
  @Input() filter!: IFilters;

  filtredProducts = signal<IProduct[]>([]);

  constructor() {
    effect(() => {
      console.log('Filtered Products Count:', this.filtredProducts().length);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Check for changes in both products and filter
    if (changes['products'] || changes['filter']) {
      this.filterProducts();
    }
  }

  private filterProducts() {
    this.filtredProducts.set(
      this.products.filter((product) => {
        return (
          this.filter.category === 'All' ||
          product.category === this.filter.category
        );
      })
    );
  }
}
