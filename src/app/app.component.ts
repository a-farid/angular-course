// app.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { IProduct, productsList, IFilters } from '../models/products.model';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ProductComponent,
    FilterComponent,
    UserComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: IProduct[] = productsList;
  displayedProducts: IProduct[] = [];
  categories: string[] = [];
  filter: { category: string; stock: string } = {
    category: 'All',
    stock: 'All',
  };

  ngOnInit() {
    this.getCategories();
    this.filterProducts();
  }

  getCategories() {
    this.categories = ['All', ...new Set(this.products.map((p) => p.category))];
  }

  onCategorySelected(category: string) {
    this.filter.category = category;
    this.filterProducts();
  }
  onStockSelected(stock: string) {
    this.filter.stock = stock;
    this.filterProducts();
  }

  filterProducts() {
    if (this.filter.category === 'All' && this.filter.stock === 'All') {
      this.displayedProducts = this.products;
    } else if (this.filter.category === 'All') {
      this.displayedProducts = this.products.filter((product: IProduct) => {
        return product.stock === this.filter.stock;
      });
    } else if (this.filter.stock === 'All') {
      this.displayedProducts = this.products.filter((product: IProduct) => {
        return product.category === this.filter.category;
      });
    } else {
      this.displayedProducts = this.products.filter((product: IProduct) => {
        return (
          product.category === this.filter.category &&
          product.stock === this.filter.stock
        );
      });
    }
  }
}
