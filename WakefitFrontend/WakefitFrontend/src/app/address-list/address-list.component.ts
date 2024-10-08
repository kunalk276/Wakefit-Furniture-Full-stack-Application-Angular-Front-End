import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: Address[] = [];
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor(private addressService: AddressService, private router: Router) {}

  ngOnInit(): void {
    this.getAddress();
  }

  private getAddress() {
    this.loading = true;
    this.addressService.getAddressList().subscribe(
      data => {
        this.addresses = data;
        this.loading = false;
        this.errorMessage = null;
      },
      error => {
        console.error('Error fetching addresses:', error);
        this.errorMessage = 'Failed to load addresses. Please try again later.';
        this.loading = false;
      }
    );
  }

  addressDetails(addressId: number) {
    this.router.navigate(['address-details', addressId]);
  }

  updateAddress(addressId: number) {
    this.router.navigate(['update-address', addressId]);
  }

  deleteAddress(addressId: number) {
    const confirmDelete = confirm("Are you sure you want to delete this address?");
    if (confirmDelete) {
      this.addressService.deleteAddress(addressId).subscribe(
        () => {
          this.addresses = this.addresses.filter(address => address.addressId !== addressId);
        },
        error => {
          console.error('Error deleting address:', error);
          alert('Failed to delete address. Please try again later.');
        }
      );
    }
  }
}
