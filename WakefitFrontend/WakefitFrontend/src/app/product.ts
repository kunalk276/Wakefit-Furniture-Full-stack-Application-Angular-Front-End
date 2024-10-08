import { Category } from "./category";

export class Product {
    productId?: number;
    name: string = '';
    description: string = '';
    price: number = 0;
    images: string = '';
    stockQuantity: number = 0;
    categoryId?: number;  
category: any;
rating: any;
orders: any;

stockStatus: any;
feedbackCount!: number;
  }

