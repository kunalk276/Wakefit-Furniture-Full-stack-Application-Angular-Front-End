// src/app/admin/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ProductDashboardData, UserDashboardData } from './admin/dashboard';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/v1'; // Base URL for the API

  constructor(private http: HttpClient) { }

  // Fetch user dashboard data
  userDashboardData(): Observable<UserDashboardData[]> {
    return this.http.get<UserDashboardData[]>(`${this.baseUrl}/user-dashboard`).pipe(
      tap(data => console.log('User dashboard data fetched:', data)), // Log the fetched data
      catchError(this.handleError) // Handle errors
    );
  }

  // Fetch product dashboard data
  productDashboardData(): Observable<ProductDashboardData[]> {
    return this.http.get<ProductDashboardData[]>(`${this.baseUrl}/product-dashboard`).pipe(
      tap(data => console.log('Product dashboard data fetched:', data)), // Log the fetched data
      catchError(this.handleError) // Handle errors
    );
  }

  // Get the count of users
  getUserCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/users/count`).pipe(
      tap(count => console.log('User count fetched:', count)), // Log the fetched count
      catchError(this.handleError) // Handle errors
    );
  }

  // Handle HTTP errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error.message); // Log the error message
    return throwError(() => new Error('Something went wrong; please try again later.')); // Return a user-friendly error message
  }
}