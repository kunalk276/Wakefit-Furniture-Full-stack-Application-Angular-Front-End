import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';  
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = {
    cartId: 0,
    userId: 0,
    user: undefined,
    products: []
  };  
  cartId: number = 1; 
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart();
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.calculateTotalPrice();
    });
  }

  loadCart(): void {
    this.cartService.getCartById(this.cartId).subscribe(
      (cart) => {
        this.cart = cart;
        this.calculateTotalPrice();
      },
      (error) => {
        console.error('Error fetching cart:', error);
        
      }
    );
  }

  calculateTotalPrice(): void {
    if (this.cart?.products) {
      this.totalPrice = this.cart.products.reduce((acc, item) => acc + (item.price ?? 0) * (item.stockQuantity ?? 1), 0);
    }
  }

  removeProductFromCart(productId: number): void {
    if (this.cart) {
      
      this.cart.products = this.cart.products.filter(item => item.productId !== productId);
      this.calculateTotalPrice(); // Update total price immediately

      
      this.cartService.updateCart(this.cartId, this.cart).subscribe(
        () => console.log('Product removed successfully'),
        (error) => {
          console.error('Error updating cart:', error);
          
          this.loadCart(); 
        }
      );
    }
  }

  checkout(): void {
    if (this.cart) {
      this.cartService.saveCart(this.cart).subscribe(
        () => {
          console.log('Cart saved successfully');
          
        },
        (error) => console.error('Error saving cart:', error)
      );
    }
  }
}