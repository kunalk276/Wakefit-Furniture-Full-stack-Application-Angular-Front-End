import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../address';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.css']
})
export class ManageAddressesComponent implements OnInit {
  addresses: Address[] = []; 

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  private getAddresses(): void {
    this.addressService.getAddressList().subscribe(
      data => {
        this.addresses = data || []; 
      },
      error => {
        console.error('Error fetching addresses', error);
       
      }
    );
  }

  addressDetails(addressId: number | undefined): void {
    if (addressId !== undefined) {
      this.router.navigate(['address-details', addressId]);
    } else {
      console.error('Address ID is undefined');
     
    }
  }

  updateAddress(addressId: number | undefined): void {
    if (addressId !== undefined) {
      this.router.navigate(['update-address', addressId]);
    } else {
      console.error('Address ID is undefined');
      
    }
  }

  deleteAddress(addressId: number | undefined): void {
    if (addressId !== undefined) {
      const confirmDelete = confirm("Are you sure you want to delete this address?");
      if (confirmDelete) {
        this.addressService.deleteAddress(addressId).subscribe(
          () => {
            console.log(`Address ${addressId} deleted successfully`);
            
            this.addresses = this.addresses.filter(address => address.addressId !== addressId);
          },
          error => {
            console.error('Error deleting address', error);
            
          }
        );
      }
    } else {
      console.error('Address ID is undefined');
      
    }
  }
}