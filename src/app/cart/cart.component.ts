import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-cart',
  imports: [CommonModule, NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeItem(item: any): void {
    // Remove the item from the cartItems array
    this.cartItems = this.cartItems.filter((i) => i !== item);

    // Update the local storage with the updated cartItems array
    localStorage.setItem('cart', JSON.stringify(this.cartItems));

    // Show SweetAlert2 pop-up
    Swal.fire({
      title: 'Removed from Cart',
      text: `${item.name} has been successfully removed.`,
      icon: 'info', // Information message style
      confirmButtonText: 'OK',
      timer: 2000, // Auto-close after 2 seconds
      timerProgressBar: true, // Show progress bar
    });
  }

  clearCart(): void {
    // Clear the cart array
    this.cartItems = [];

    // Remove the cart data from local storage
    localStorage.removeItem('cart');

    // Show SweetAlert2 pop-up for clearing the cart
    Swal.fire({
      title: 'Cart Cleared',
      text: 'All items have been removed from your cart.',
      icon: 'warning', // Warning style for full clear
      confirmButtonText: 'OK',
      timer: 2000, // Auto-close after 2 seconds
      timerProgressBar: true, // Show progress bar
    });
  }
}
