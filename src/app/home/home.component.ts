import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications

@Component({
  selector: 'app-home',
  imports: [NavBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private cartService: CartService) {}

  addToCart(item: any): void {
    // Add the item to the cart via the CartService
    this.cartService.addToCart(item);

    // Show SweetAlert2 notification
    Swal.fire({
      title: 'Added to Cart!',
      text: `${item.name} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 1500, // Auto-close after 1.5 seconds
      timerProgressBar: true,
    });
  }
}
