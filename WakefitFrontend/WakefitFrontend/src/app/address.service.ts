import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseURL = "http://localhost:8080/api/v1/Address"; 

  constructor(private httpClient: HttpClient) { }

  createAddress(address: Address): Observable<Address> {
    return this.httpClient.post<Address>(`${this.baseURL}`, address).pipe(
      catchError(this.handleError)
    );
  }

  getAddressList(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${this.baseURL}/all`).pipe(
      catchError(this.handleError)
    );
  }

  getAddressById(addressId: number): Observable<Address> {
    return this.httpClient.get<Address>(`${this.baseURL}/${addressId}`).pipe(
      catchError(this.handleError)
    );
  }

  updateAddress(addressId: number, address: Address): Observable<Address> {
    return this.httpClient.put<Address>(`${this.baseURL}/${addressId}`, address).pipe(
      catchError(this.handleError)
    );
  }

  deleteAddress(addressId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${addressId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.error('Response body:', error.error);
    }
    return throwError(() => new Error(errorMessage));
  }
}
