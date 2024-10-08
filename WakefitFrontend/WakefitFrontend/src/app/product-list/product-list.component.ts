import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProductList();
  }

  private getProductList(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data || [];
        console.log('Products loaded:', this.products); // Log products
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  productDetails(productId: number | undefined): void {
    if (productId !== undefined) {
      this.router.navigate(['product-details', productId]);
    } else {
      console.error('Product ID is undefined');
    }
  }

  updateProduct(productId: number | undefined): void {
    if (productId !== undefined) {
      this.router.navigate(['update-product', productId]);
    } else {
      console.error('Product ID is undefined');
    }
  }

  deleteProduct(productId: number | undefined): void {
    if (productId !== undefined) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          console.log(`Product ${productId} deleted successfully`);
          this.getProductList(); // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting product:', error);
        }
      );
    } else {
      console.error('Product ID is undefined');
    }
  }

  storeCategoryId(categoryId: number): void {
    this.productService.storeCategoryId(categoryId).subscribe(
      () => {
        console.log(`Category ID ${categoryId} stored successfully`);
      },
      (      error: any) => {
        console.error('Error storing category ID:', error);
      }
    );
  }
}
