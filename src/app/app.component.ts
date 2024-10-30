import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { IFilters, IProduct, productsList } from '../models/products.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, FilterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: IProduct[] = productsList;
  categories: string[] = [];
  filter: IFilters = {
    category: 'Computers',
    stock: 'All',
  };

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = [
      'All',
      ...new Set(this.products.map((product) => product.category)),
    ];
  }

  onCategorySelected(category: string) {
    this.filter.category = category;
  }
  onStockSelected(stock: string) {
    this.filter.stock = stock;
  }
}
