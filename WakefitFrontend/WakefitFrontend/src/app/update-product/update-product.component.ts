// src/app/update-product/update-product.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId!: number;
  product: Product = new Product();
  categories: Category[] = [];
  selectedCategoryId: number | undefined; // Changed to handle undefined case

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get productId from route parameters
    this.productId = +this.route.snapshot.params['productId'];

    // Fetch product details
    this.productService.getProductById(this.productId).subscribe(
      data => {
        this.product = data;
        this.selectedCategoryId = this.product.categoryId;
      },
      error => console.error('Error fetching product details', error)
    );

    // Fetch categories for the dropdown
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => console.error('Error fetching categories', error)
    );
  }

  onSubmit(): void {
    if (this.selectedCategoryId !== undefined) {
      this.product.categoryId = this.selectedCategoryId; // Ensure the categoryId is updated

      // Update product
      this.productService.updateProduct(this.productId, this.product).subscribe(
        () => {
          console.log('Product updated successfully');
          this.goToProductList();
        },
        error => console.error('Error updating product', error)
      );
    } else {
      console.error('No category selected');
    }
  }

  goToProductList() {
    this.router.navigate(['/manage-products']);
  }
}
