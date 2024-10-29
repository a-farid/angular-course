import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { IProduct, productsList } from '../models/products.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  products: IProduct[] = productsList;
  displayedProducts: IProduct[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  ngOnInit() {
    this.getCategories();
    this.filterProducts();
    this.selectedCategory;
  }
  set selectedCategoryChanged(value: string) {
    this.selectedCategory = value;
    this.filterProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory']) {
      // Update the message based on the counter value
      this.filterProducts();
    }
  }

  getCategories() {
    this.categories = [
      'All',
      ...new Set(this.products.map((product) => product.category)),
    ];
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.displayedProducts = this.products;
    } else {
      this.displayedProducts = this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    }
    console.log('Filtered products: ', this.displayedProducts);
  }
}
