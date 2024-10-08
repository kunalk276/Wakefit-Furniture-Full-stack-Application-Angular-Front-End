import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // Replace with your actual API URL
  private apiUrl = 'https://yourapi.com/api/Payment'; 

  constructor(private http: HttpClient) { }

  // Add a new payment
  addPayment(payment: Payment): Observable<Payment> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Payment>(url, payment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Fetch a payment by its ID
  getPaymentById(paymentId: number): Observable<Payment> {
    const url = `${this.apiUrl}/${paymentId}`;
    return this.http.get<Payment>(url);
  }
}
