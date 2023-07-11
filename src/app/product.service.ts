// product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the first description',
      price: 10,
      imageUrl: './assets/product.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the second description',
      price: 20,
      imageUrl: './assets/product.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the third description',
      price: 30,
      imageUrl: './assets/product.jpg'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
