import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponse {
  token: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = 'http://localhost:8080/api/users/login'; 
  private registerURL = 'http://localhost:8080/api/users/register';

  constructor(private httpClient: HttpClient) { }

  // Login method to authenticate the user
  login(credentials: { username: string, password: string }): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.loginURL, credentials).pipe(
        catchError(this.handleError)
    );
}

  // Registration method to create a new user
  register(credentials: { username: string, password: string }): Observable<any> {
    return this.httpClient.post<any>(this.registerURL, credentials).pipe(
      catchError(this.handleError)
    );
  }

  // Method to handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message || error.message}`;
    }
    return throwError(errorMessage);
  }

  // Token management methods
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  // Optionally, you can add methods to manage user roles
  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  clearRole(): void {
    localStorage.removeItem('role');
  }
}