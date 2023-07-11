import { Injectable } from '@angular/core';
import { Product } from './product.model';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.product === product);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.product === product);
    if (index > -1) {
      const item = this.cartItems[index];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cartItems = [];
  }
}
