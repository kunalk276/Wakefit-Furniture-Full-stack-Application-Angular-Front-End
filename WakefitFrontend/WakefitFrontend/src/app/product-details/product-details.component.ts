import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: Product;
  quantity: number = 1;
  stars: Array<number> = [1, 2, 3, 4];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
      // Assume the product service returns feedback count or you fetch it separately
      // If feedback count is not included in the product data, you need to add a separate API call to get it.
    });
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  

  goBack() {
    this.router.navigate(['/product']);
  }

  addToCart(): void {
    if (this.product && this.quantity > 0) {
      this.cartService.addToCart(this.product, this.quantity);
      alert('Product added to cart!');
    }
  }

  viewFeedbacks() {
    this.router.navigate(['/product-feedback-view', this.productId]);
  }
}
