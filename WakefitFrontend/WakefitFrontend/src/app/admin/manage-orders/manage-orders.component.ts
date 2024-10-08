import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { Order } from '../../order';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders!: Order[];
  loading: boolean = false; // Loading state
  errorMessage: string | null = null; // Error message state

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.loading = true; // Set loading to true
    this.orderService.getAllOrders().subscribe(
      data => {
        this.orders = data;
        this.loading = false; // Set loading to false after data is fetched
        this.errorMessage = null; // Clear any previous error message
      },
      error => {
        console.error('Error fetching orders:', error);
        this.errorMessage = 'Failed to load orders. Please try again later.'; // Set error message
        this.loading = false; // Set loading to false on error
      }
    );
  }

  viewOrder(orderId: number) {
    this.router.navigate(['order-details', orderId]);
  }

  updateOrder(orderId: number) {
    this.router.navigate(['update-order', orderId]);
  }

  deleteOrder(orderId: number) {
    const confirmDelete = confirm("Are you sure you want to delete this order?");
    if (confirmDelete) {
      this.orderService.deleteOrder(orderId).subscribe(
        () => {
          this.getOrders(); // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting order:', error);
          this.errorMessage = 'Failed to delete order. Please try again later.'; // Set error message
        }
      );
    }
  }
  updateOrderStatus(orderId: number, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const newStatus = selectElement.value;
  
    this.orderService.updateOrderStatus(orderId, newStatus).subscribe(
      () => {
       
      },
      (error: any) => {
        console.error('Error updating order status:', error);
        this.errorMessage = 'Failed to update order status. Please try again later.';
      }
    );
  }
  
  
}