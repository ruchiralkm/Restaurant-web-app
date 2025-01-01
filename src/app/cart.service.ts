<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cart';

  constructor() {}

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addToCart(item: any): void {
    const currentCart = this.getCartItems();
    currentCart.push(item); // Add the new item to the cart
    localStorage.setItem(this.storageKey, JSON.stringify(currentCart)); // Update local storage
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }
}
=======
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cart';

  constructor() {}

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addToCart(item: any): void {
    const currentCart = this.getCartItems();
    currentCart.push(item); // Add the new item to the cart
    localStorage.setItem(this.storageKey, JSON.stringify(currentCart)); // Update local storage
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }
}
>>>>>>> 5aea1ab34399a4314f5c9fb0ea99cfffd7909276
