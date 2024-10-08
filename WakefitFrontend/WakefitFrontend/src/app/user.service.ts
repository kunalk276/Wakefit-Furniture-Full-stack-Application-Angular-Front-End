import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${userId}`); 
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/${userId}`, user); 
  }

  deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${userId}`); 
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/all`); 
  }

  getUserByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/username/${username}`); 
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
