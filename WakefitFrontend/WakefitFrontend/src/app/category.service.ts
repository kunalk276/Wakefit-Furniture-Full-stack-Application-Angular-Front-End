import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = 'http://localhost:8080/api/v1/category'; 

  constructor(private httpClient: HttpClient) { }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.baseURL}/add`, category)
      .pipe(catchError(this.handleError));
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}/all`, { responseType: 'json' });
  }
  
  getCategoryById(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseURL}/${categoryId}`)
      .pipe(catchError(this.handleError));
  }

  updateCategory(categoryId: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.baseURL}/${categoryId}`, category)
      .pipe(catchError(this.handleError));
  }

  deleteCategory(categoryId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${categoryId}`)
      .pipe(catchError(this.handleError));
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/${categoryId}/products`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
