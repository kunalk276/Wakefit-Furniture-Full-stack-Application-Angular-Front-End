import { Order } from './order'; 

export class Payment {
  paymentId: number;
  order: Order;
  paymentDate: Date;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;

  constructor(
    paymentId: number,
    order: Order,
    paymentDate: Date,
    amount: number,
    paymentMethod: string,
    paymentStatus: string
  ) {
    this.paymentId = paymentId;
    this.order = order;
    this.paymentDate = paymentDate;
    this.amount = amount;
    this.paymentMethod = paymentMethod;
    this.paymentStatus = paymentStatus;
  }
}
