import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Cart } from './cart';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private baseURL = 'http://localhost:8080/api/v1/cart';
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
    cartId: 0,
    userId: 0,
    user: null, 
    products: []
  });
  cart$: Observable<Cart> = this.cartSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getCartById(cartId: number): Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.baseURL}/${cartId}`).pipe(
      tap(cart => this.cartSubject.next(cart)),
      catchError(this.handleError)
    );
  }
  getCartsByUserId(userId: number): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseURL}/user/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  
  addToCart(product: Product, quantity: number): void {
    if (quantity <= 0) return;

    const currentCart = this.cartSubject.value;
    const existingProduct = currentCart.products.find(p => p.productId === product.productId);

    if (existingProduct) {
      existingProduct.stockQuantity! += quantity; 
    } else {
      currentCart.products.push({ ...product, stockQuantity: quantity });
    }

    
    this.updateCart(currentCart.cartId, currentCart).subscribe(
      () => {},
      error => console.error('Error updating cart:', error)
    );
  }

  saveCart(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(`${this.baseURL}/add`, cart).pipe(
        tap(savedCart => this.cartSubject.next(savedCart)), 
        catchError(this.handleError)
    );
}

  updateCart(cartId: number, cart: Cart): Observable<Cart> {
    return this.httpClient.put<Cart>(`${this.baseURL}/update/${cartId}`, cart).pipe(
      tap(updatedCart => this.cartSubject.next(updatedCart)),
      catchError(this.handleError)
    );
  }

  removeProductFromCart(productId: number): void {
    const currentCart = this.cartSubject.value;
    currentCart.products = currentCart.products.filter(item => item.productId !== productId);

    this.updateCart(currentCart.cartId, currentCart).subscribe(
      () => {},
      error => console.error('Error updating cart:', error)
    );
  }

  deleteCart(cartId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${cartId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}