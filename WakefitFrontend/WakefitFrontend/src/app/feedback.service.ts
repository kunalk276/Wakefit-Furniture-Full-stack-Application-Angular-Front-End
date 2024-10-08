import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from './feedback'; 
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseURL = "http://localhost:8080/api/v1/feedback"; 

  constructor(private httpClient: HttpClient) { }

  createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(`${this.baseURL}`, feedback);
  }

  getFeedbackList(productId?: number): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.baseURL}`);
  }

  getFeedbackById(feedbackId: number): Observable<Feedback> {
    return this.httpClient.get<Feedback>(`${this.baseURL}/${feedbackId}`);
  }

  updateFeedback(feedbackId: number, feedback: Feedback): Observable<Feedback> {
    return this.httpClient.put<Feedback>(`${this.baseURL}/update/${feedbackId}`, feedback);
  }

  deleteFeedback(feedbackId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${feedbackId}`);
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  
  getFeedbacksByProductId(productId: number): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.baseURL}/product/${productId}`);
  }
}
