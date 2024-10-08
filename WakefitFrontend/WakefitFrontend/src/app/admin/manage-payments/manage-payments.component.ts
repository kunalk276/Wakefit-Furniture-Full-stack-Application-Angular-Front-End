import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../payment.service';
import { Payment } from '../../payment';


@Component({
  selector: 'app-manage-payments',
  templateUrl: './manage-payments.component.html',
  styleUrls: ['./manage-payments.component.css']
})
export class ManagePaymentsComponent implements OnInit {
deletePayment(arg0: number) {
throw new Error('Method not implemented.');
}
updateStatus(arg0: number) {
throw new Error('Method not implemented.');
}
viewDetails(arg0: number) {
throw new Error('Method not implemented.');
}

  payments: Payment[] = [];
  selectedPayment: Payment | undefined;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadPayment(1); // Example to load a payment by ID
  }

  // Method to add a payment
  addPayment(payment: Payment): void {
    this.paymentService.addPayment(payment).subscribe((data: Payment) => {
      console.log('Payment added:', data);
    }, error => {
      console.error('Error adding payment', error);
    });
  }

  // Method to load a payment by ID
  loadPayment(paymentId: number): void {
    this.paymentService.getPaymentById(paymentId).subscribe((data: Payment) => {
      this.selectedPayment = data;
      console.log('Payment loaded:', data);
    }, error => {
      console.error('Error loading payment', error);
    });
  }
}
