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
  filter: any = {
    category: 'All',
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
    this.filter.categories = category;
  }
}
