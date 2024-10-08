import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import { CategoryService } from '../../category.service';
import { Category } from '../../category';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategoryId?: number; // Optional number type
category: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error('Error fetching categories', error)
    );
  }

  loadProducts(): void {
    this.productService.getProductList().subscribe(
      data => this.products = data,
      error => console.error('Error fetching products', error)
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
          this.loadProducts(); // Refresh the list after deletion
        },
        error => console.error('Error deleting product', error)
      );
    } else {
      console.error('Product ID is undefined');
    }
  }

  filterByCategory(): void {
    console.log('Selected Category ID:', this.selectedCategoryId);
  
    if (this.selectedCategoryId) {
      this.productService.getProductsByCategory(this.selectedCategoryId).subscribe(
        data => {
          console.log('Products fetched:', data);
          this.products = data;
        },
        error => console.error('Error fetching products by category', error)
      );
    } else {
      console.log('No category selected, loading all products');
      this.loadProducts(); // Load all products if no category is selected
    }
  }
}