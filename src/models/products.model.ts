export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: string | boolean;
}
export interface IFilters {
  category: string;
  stock: string | boolean;
}

export const productsList: IProduct[] = [
  {
    id: 1,
    name: 'Smartphone',
    description:
      'A high-end smartphone with an advanced camera and fast processor.',
    price: 699.99,
    category: 'Electronics',
    stock: 'Out of stock',
  },
  {
    id: 2,
    name: 'Laptop',
    description:
      'Lightweight laptop with excellent battery life and an HD display.',
    price: 1199.99,
    category: 'Computers',
    stock: 'Out of stock',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    description:
      'Compact wireless earbuds with noise cancellation for clear sound.',
    price: 149.99,
    category: 'Accessories',
    stock: 'In stock',
  },
  {
    id: 4,
    name: 'Office Chair',
    description:
      'Ergonomic chair designed for comfort and support during long hours.',
    price: 249.99,
    category: 'Furniture',
    stock: 'In stock',
  },
  {
    id: 5,
    name: 'Coffee Maker',
    description:
      'Single-serve coffee maker with reusable filter for eco-friendly brewing.',
    price: 89.99,
    category: 'Electronics',
    stock: 'In stock',
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with 360-degree sound and deep bass.',
    price: 99.99,
    category: 'Computers',
    stock: 'Out of stock',
  },
  {
    id: 7,
    name: '4K Television',
    description:
      'Large screen 4K UHD television with HDR for a cinema-like experience.',
    price: 1299.99,
    category: 'Electronics',
    stock: 'In stock',
  },
  {
    id: 8,
    name: 'Running Shoes',
    description: 'Lightweight running shoes with extra cushioning and support.',
    price: 79.99,
    category: 'Sportswear',
    stock: 'In stock',
  },
  {
    id: 9,
    name: 'Digital Camera',
    description:
      'Compact digital camera with zoom lens and multiple photo modes.',
    price: 499.99,
    category: 'Computers',
    stock: 'Out of stock',
  },
  {
    id: 10,
    name: 'Gaming Console',
    description:
      'Next-gen gaming console with high-speed processor and 4K capabilities.',
    price: 499.99,
    category: 'Gaming',
    stock: 'In stock',
  },
  {
    id: 11,
    name: 'Electric Toothbrush',
    description:
      'Electric toothbrush with multiple brushing modes and a long battery life.',
    price: 59.99,
    category: 'Personal Care',
    stock: 'In stock',
  },
  {
    id: 12,
    name: 'Smart Watch',
    description:
      'Smart watch with fitness tracking, heart rate monitoring, and notifications.',
    price: 199.99,
    category: 'Sportswear',
    stock: 'In stock',
  },
];
