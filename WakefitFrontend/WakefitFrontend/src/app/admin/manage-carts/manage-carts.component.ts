import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../cart';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-manage-carts',
  templateUrl: './manage-carts.component.html',
  styleUrls: ['./manage-carts.component.css']
})
export class ManageCartsComponent implements OnInit {
  carts: Cart[] = []; // Array to hold all carts
  selectedCart: Cart | null = null; // Property to hold the selected cart
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.loadCarts(); // Load all carts on initialization
  }

  loadCarts(): void {
    // Fetch all carts from the service
    this.cartService.getCartsByUserId(1).subscribe( // Replace with actual user ID
      (carts: Cart[]) => {
        this.carts = carts;
        if (carts.length > 0) {
          this.onCartChange({ target: { value: carts[0].cartId } }); // Automatically select the first cart
        }
      },
      (error: any) => {
        console.error('Error fetching carts:', error);
      }
    );
  }

  onCartChange(event: any): void {
    const cartId = event.target.value; // Get selected cart ID
    this.cartService.getCartById(cartId).subscribe(
      (cart: Cart) => { // Explicitly define the type for cart
        this.selectedCart = cart; // Set the selected cart
        this.calculateTotalPrice(); // Calculate total price for selected cart
      },
      (error: any) => { // Explicitly define the type for error
        console.error('Error fetching selected cart:', error);
      }
    );
  }

  calculateTotalPrice(): void {
    if (this.selectedCart?.products) {
      this.totalPrice = this.selectedCart.products.reduce((acc, product) => acc + (product.price * product.stockQuantity), 0);
    }
  }

  viewProduct(productId: number): void {
    this.router.navigate(['product-details', productId]);
  }

  removeProduct(productId: number): void {
    if (this.selectedCart && productId !== 0) {
      this.selectedCart.products = this.selectedCart.products.filter(product => product.productId !== productId);
      this.cartService.updateCart(this.selectedCart.cartId, this.selectedCart).subscribe(
        () => {
          this.calculateTotalPrice();
        },
        (error: any) => {
          console.error('Error updating cart:', error);
        }
      );
    }
  }

  deleteCart(): void {
    if (this.selectedCart) {
      this.cartService.deleteCart(this.selectedCart.cartId).subscribe(
        () => {
          console.log('Cart deleted successfully');
          this.loadCarts(); // Reload carts after deletion
          this.selectedCart = null; // Reset selected cart
        },
        (error: any) => { // Explicitly define the type for error
          console.error('Error deleting cart:', error);
        }
      );
    }
  }
}