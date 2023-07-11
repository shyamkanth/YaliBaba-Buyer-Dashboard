import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CartService } from './cart.service';

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  cartItems: CartItem[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.cartItems = this.cartService.getCartItems();
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  checkout() {
    // Add the desired functionality for the checkout process
    // For example, you can navigate to a checkout page or display a confirmation message
  }
  
}
