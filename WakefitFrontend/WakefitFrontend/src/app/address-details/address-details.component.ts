// address-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  address!: Address;
  addressId!: number;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router // Inject Router here
  ) {}

  ngOnInit(): void {
    this.addressId = +this.route.snapshot.paramMap.get('addressId')!; // Get the addressId from route parameters
    this.addressService.getAddressById(this.addressId).subscribe(data => {
      this.address = data;
    }, error => {
      console.error('Error fetching address details:', error);
      // Handle error case here (e.g., redirect or show a message)
    });
  }

  goBack() {
    this.router.navigate(['/addresses']);
  }
}
