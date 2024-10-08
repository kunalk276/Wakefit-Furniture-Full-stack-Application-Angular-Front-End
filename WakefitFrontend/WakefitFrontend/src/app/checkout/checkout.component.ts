import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service'; 
import { Order } from '../order'; 

type StateCode = 'MH' | 'KA' | 'DL' | 'TN';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  colors: string[] = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#ffcc33'];
  currentColorIndex: number = 0;

  cart: Cart;
  totalPrice: number = 0;
  tax: number = 0;
  delivery: number = 500; 
  discount: number = 0;
  finalPrice: number = 0;
  isAddressModalOpen: boolean = false;
  isPaymentModalOpen: boolean = false;
  isOrderConfirmationOpen: boolean = false;
  address: Address = new Address();
  payment: any = { cardNumber: '', expiryDate: '', cvv: '' };
  discountCode: string = '';
  selectedPaymentMethod: string = '';
  orderNumber: string = '';
  upiForm: FormGroup; 
  cardForm: FormGroup;
  
  states = [
    { code: 'MH', name: 'Maharashtra' },
    { code: 'KA', name: 'Karnataka' },
    { code: 'DL', name: 'Delhi' },
    { code: 'TN', name: 'Tamil Nadu' }
  ];

  citiesByState: Record<StateCode, string[]> = {
    'MH': [
      'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Satara', 'Kolhapur',
      'Aurangabad', 'Nashik', 'Solapur', 'Latur', 'Jalgaon', 'Akola',
      'Amravati', 'Ulhasnagar', 'Ichalkaranji', 'Ratnagiri', 'Chandrapur',
      'Bhandara', 'Wardha', 'Parbhani', 'Kalyan', 'Dombivli',
      'Chinchwad', 'PCMC', 'Wagholi', 'Hadapsar', 'Viman Nagar',
      'Kothrud', 'Hinjewadi', 'Aundh', 'Baner', 'Pimpri', 'Kasba Peth'
    ],
    'KA': ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubli'],
    'DL': ['New Delhi', 'Dwarka', 'Rohini', 'Vasant Kunj'],
    'TN': ['Chennai', 'Coimbatore', 'Madurai', 'Trichy']
  };
  cityPincodeMap: Record<string, string> = {
    'Mumbai': '400001',
    'Pune': '411001',
    'Nagpur': '440001',
    'Thane': '400601',
    'Satara': '415001',
    'Kolhapur': '416001',
    'Aurangabad': '431001',
    'Nashik': '422001',
    'Solapur': '413001',
    'Latur': '413512',
    'Jalgaon': '425001',
    'Akola': '444001',
    'Amravati': '444601',
    'Ulhasnagar': '421003',
    'Ichalkaranji': '416115',
    'Ratnagiri': '415612',
    'Chandrapur': '442401',
    'Bhandara': '441904',
    'Wardha': '442001',
    'Parbhani': '431401',
    'Kalyan': '421301',
    'Dombivli': '421201',
    'Chinchwad': '411019',
    'PCMC': '411044',
    'Wagholi': '412207',
    'Hadapsar': '411028',
    'Viman Nagar': '411014',
    'Kothrud': '411038',
    'Hinjewadi': '411057',
    'Aundh': '411007',
    'Baner': '411045',
    'Pimpri': '411018',
    'Kasba Peth': '411011',
    'Bengaluru': '560001',
    'Mysuru': '570001',
    'Mangalore': '575001',
    'Hubli': '580020',
    'New Delhi': '110001',
    'Dwarka': '110075',
    'Rohini': '110085',
    'Vasant Kunj': '110070',
    'Chennai': '600001',
    'Coimbatore': '641001',
    'Madurai': '625001',
    'Trichy': '620001'
  };
  onCityChange(event: any) {
    const selectedCity = event.target.value;
    this.address.city = selectedCity;
    this.address.pincode = this.cityPincodeMap[selectedCity] || '';
  }

  selectedState: StateCode = 'MH';
  cities: string[] = [];
  orderConfirmationMessage: string = ''; 
  isLoading: boolean = false; 
  isAddressSaved: any;

  constructor(
    private addressService: AddressService, 
    private cartService: CartService, 
    private orderService: OrderService, 
    private formBuilder: FormBuilder
  ) {
    this.cart = {
      cartId: 0,
      userId: 0,
      user: undefined,
      products: []
    };

    this.upiForm = this.formBuilder.group({
      upiId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+$')]]
    });

    this.cardForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/\d{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.calculateTotalPrice();
    });
    this.cities = this.citiesByState[this.selectedState];
    this.changeDiscountColor();
  }

  changeDiscountColor() {
    const discountCodeElement = document.querySelector('.discount-code') as HTMLElement;
    if (discountCodeElement) {
      setInterval(() => {
        discountCodeElement.style.color = this.colors[this.currentColorIndex];
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
      }, 1500);
    }
  }

  calculateTotalPrice(): void {
    if (this.cart?.products) {
      const subtotal = this.cart.products.reduce((acc, item) => acc + (item.price ?? 0) * (item.stockQuantity ?? 1), 0);
      this.totalPrice = subtotal;

      this.tax = subtotal * 0.1;
      this.finalPrice = subtotal + this.tax + this.delivery - this.discount;
    }
  }

  applyDiscount() {
    if (this.discountCode === 'WAKEFIT27') {
      this.discount = this.totalPrice * 0.1; 
    } else {
      this.discount = 0; 
    }
    this.calculateTotalPrice(); 
  }

  openAddressModal() {
    this.isAddressModalOpen = true; 
  }

  closeAddressModal() {
    this.isAddressModalOpen = false; 
  }

  openPaymentModal() {
    this.isPaymentModalOpen = true;
  }

  closePaymentModal() {
    this.isPaymentModalOpen = false;
  }

  openOrderConfirmation() {
    this.isOrderConfirmationOpen = true;
    this.orderNumber = this.generateOrderNumber();
  }

  closeOrderConfirmation() {
    this.isOrderConfirmationOpen = false;
  }

  generateOrderNumber(): string {
    return 'ORDER-' + Math.floor(Math.random() * 100000).toString();
  }

  onStateChange(event: any) {
    const selectedStateCode = event.target.value as StateCode;
    this.selectedState = selectedStateCode;
    this.cities = this.citiesByState[this.selectedState] || [];
    
    const selectedState = this.states.find(state => state.code === selectedStateCode);
    this.address.state = selectedState ? selectedState.name : '';
    this.address.city = ''; 
  }

  onPaymentMethodChange(event: any) {
    this.selectedPaymentMethod = event.target.value;
  }

  saveAddress() {
    this.address.state = this.selectedState; 
    console.log('Address to be saved:', this.address); 
    this.addressService.createAddress(this.address).subscribe(
      savedAddress => {
        console.log('Address saved:', savedAddress);
        this.address = savedAddress;
        this.isAddressModalOpen = false; 
        this.openPaymentModal(); 
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.saveAddress();
  }

  processPayment() {
    const order: Order = {
      user: this.cart.user,
      orderDate: new Date(),
      totalAmount: this.finalPrice,
      paymentStatus: 'Pending',
      orderStatus: 'Processing',
      billingAddress: this.address,
      shippingAddress: this.address,
      products: this.cart.products,
      orderId: 0,
      status: ''
    };

    this.orderService.addOrder(order).subscribe(
      response => {
        console.log('Order created successfully:', response);
        this.closePaymentModal();
        this.openOrderConfirmation();
      },
      error => {
        console.error('Error creating order:', error);
      }
    );
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Coupon code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}