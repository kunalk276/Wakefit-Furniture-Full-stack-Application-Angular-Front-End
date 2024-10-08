import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
orderDashboard() {
  this.router.navigateByUrl("/manage-orders");
}
  total_user: number = 0;

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchUserCount();
  }

  userDashboard() {
    this.router.navigateByUrl("/users");
  }

  paymentDashboard() {
    this.router.navigateByUrl("/manage-payments"); 
  }

  feedbackDashboard() {
    this.router.navigateByUrl("/manage-feedbacks"); 
  }

  addressDashboard() {
    this.router.navigateByUrl("/manage-addresses");
  }

  cartDashboard() {
    this.router.navigateByUrl("/manage-carts");
  }

  categoryDashboard() {
    this.router.navigateByUrl("/manage-categories");
  }

  productDashboard() {
    this.router.navigateByUrl("/manage-products");
  }

  fetchUserCount() {
    this.adminService.getUserCount().subscribe(
      (count: number) => {
        this.total_user = count;
      },
      (error: any) => {
        console.error("Error fetching user count", error);
      }
    );
  }
}
