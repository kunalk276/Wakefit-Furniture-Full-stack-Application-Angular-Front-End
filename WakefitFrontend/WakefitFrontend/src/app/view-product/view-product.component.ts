import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string | null = null;
  categoryId: number | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.categoryId = +params.get('categoryId')!; 
      if (this.categoryId) {
        this.getProductsByCategory(this.categoryId);
      } else {
        this.getProducts(); 
      }
    });
  }

  getProducts(): void {
    this.productService.getProductList().subscribe({
      next: (data: Product[]) => {
        console.log('Products fetched:', data);
        this.products = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.errorMessage = 'Failed to load products. Please try again later.';
      }
    });
  }

  getProductsByCategory(categoryId: number): void {
    this.productService.getProductsByCategory(categoryId).subscribe({
      next: (data: Product[]) => {
        console.log(`Products fetched for category ${categoryId}:`, data);
        this.products = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error(`Error fetching products for category ${categoryId}`, err);
        this.errorMessage = 'Failed to load products for this category. Please try again later.';
      }
    });
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product-details', productId]);
  }

  addToCart(product: Product): void {
   
    console.log('Adding product to cart:', product);
   
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
