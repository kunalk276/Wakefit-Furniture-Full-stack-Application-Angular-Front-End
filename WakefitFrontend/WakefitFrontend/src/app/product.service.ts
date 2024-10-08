import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './product';
import { Feedback } from './feedback'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/v3/products";

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseURL, product)
      .pipe(
        tap(data => console.log('Create Product Response:', data)),
        catchError(this.handleError)
      );
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL)
      .pipe(
        tap(data => console.log('Product List Data:', data)),
        catchError(this.handleError)
      );
  }

  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${productId}`)
      .pipe(
        tap(data => console.log('Get Product By ID Response:', data)),
        catchError(this.handleError)
      );
  }

  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseURL}/${productId}`, product)
      .pipe(
        tap(data => console.log('Update Product Response:', data)),
        catchError(this.handleError)
      );
  }

  deleteProduct(productId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${productId}`)
      .pipe(
        tap(() => console.log('Delete Product Response: Product deleted')),
        catchError(this.handleError)
      );
  }

  searchProductsByName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/search?name=${name}`)
      .pipe(
        tap(data => console.log('Search Products By Name Response:', data)),
        catchError(this.handleError)
      );
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/category/${categoryId}`)
      .pipe(
        tap(data => console.log('Get Products By Category Response:', data)),
        catchError(this.handleError)
      );
  }

  storeCategoryId(categoryId: number): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/storeCategoryId`, { categoryId })
      .pipe(
        catchError(this.handleError)
      );
  }

  saveProductAsFavorite(productId: number): Observable<void> {
    return this.httpClient.post<void>(`${this.baseURL}/favorite`, { productId })
      .pipe(
        catchError(this.handleError)
      );
  }

  getFeedbacksByProductId(productId: number): Observable<Feedback[]> { 
    return this.httpClient.get<Feedback[]>(`${this.baseURL}/${productId}/feedbacks`)
      .pipe(
        tap(data => console.log('Feedbacks Data:', data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
