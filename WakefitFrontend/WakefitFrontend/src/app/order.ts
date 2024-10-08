import { Product } from "./product";

export class Order {
  orderId!: number;
  orderDate!: Date;
  totalAmount!: number;
  paymentStatus!: string;
  orderStatus!: string;
  user!: any;
  billingAddress!: any;
  shippingAddress!: any;
  products!: Product[]; 
  status!: string;
}