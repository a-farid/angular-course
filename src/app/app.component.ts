import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Smartphone',
      description:
        'A high-end smartphone with an advanced camera and fast processor.',
      price: 699.99,
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 2,
      name: 'Laptop',
      description:
        'Lightweight laptop with excellent battery life and an HD display.',
      price: 1199.99,
      category: 'Computers',
      inStock: false,
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      description:
        'Compact wireless earbuds with noise cancellation for clear sound.',
      price: 149.99,
      category: 'Accessories',
      inStock: true,
    },
    {
      id: 4,
      name: 'Office Chair',
      description:
        'Ergonomic chair designed for comfort and support during long hours.',
      price: 249.99,
      category: 'Furniture',
      inStock: true,
    },
    {
      id: 5,
      name: 'Coffee Maker',
      description:
        'Single-serve coffee maker with reusable filter for eco-friendly brewing.',
      price: 89.99,
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with 360-degree sound and deep bass.',
      price: 99.99,
      category: 'Computers',
      inStock: false,
    },
    {
      id: 7,
      name: '4K Television',
      description:
        'Large screen 4K UHD television with HDR for a cinema-like experience.',
      price: 1299.99,
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 8,
      name: 'Running Shoes',
      description:
        'Lightweight running shoes with extra cushioning and support.',
      price: 79.99,
      category: 'Sportswear',
      inStock: true,
    },
    {
      id: 9,
      name: 'Digital Camera',
      description:
        'Compact digital camera with zoom lens and multiple photo modes.',
      price: 499.99,
      category: 'Computers',
      inStock: false,
    },
    {
      id: 10,
      name: 'Gaming Console',
      description:
        'Next-gen gaming console with high-speed processor and 4K capabilities.',
      price: 499.99,
      category: 'Gaming',
      inStock: true,
    },
    {
      id: 11,
      name: 'Electric Toothbrush',
      description:
        'Electric toothbrush with multiple brushing modes and a long battery life.',
      price: 59.99,
      category: 'Personal Care',
      inStock: true,
    },
    {
      id: 12,
      name: 'Smart Watch',
      description:
        'Smart watch with fitness tracking, heart rate monitoring, and notifications.',
      price: 199.99,
      category: 'Sportswear',
      inStock: true,
    },
  ];
  categories!: string[];
  categorieSelected: string = 'All';

  constructor() {
    this.getCategories();
  }
  getCategories() {
    this.categories = [
      'All',
      ...this.products.map((product) => product.category),
    ];
    this.categories = this.categories.filter(
      (category, index) => this.categories.indexOf(category) === index
    );
  }
  title = 'Test app';
  number: number = 0;
  name: string = '';
  childId: number = 0;
  fruits: string[] = ['Apple', 'Banana', 'Orange'];
  receiveData(data: { id: number; content: string }) {
    this.name = data.content;
    this.childId = data.id;
  }
  recieveCategory(data: string) {
    this.categorieSelected = data;
  }
  numberPlus() {
    this.number++;
  }
  numberMinus() {
    this.number > 0 && this.number--;
  }
}
