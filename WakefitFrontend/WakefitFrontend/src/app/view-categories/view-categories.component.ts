import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Category } from '../category';
import { Product } from '../product';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId?: number;
  products: Product[] = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data: Category[]) => this.categories = data,
      error: (err) => console.error('Error fetching categories', err)
    });
  }

  viewCategory(categoryId?: number): void {
    if (categoryId) {
      this.selectedCategoryId = categoryId;
      this.filterByCategory();
    } else {
      console.error('Category ID is undefined');
    }
  }

  filterByCategory(): void {
    if (this.selectedCategoryId) {
      this.productService.getProductsByCategory(this.selectedCategoryId).subscribe({
        next: (data: Product[]) => {
          console.log('Products fetched:', data);
          this.products = data;
          this.router.navigate(['/category-products', this.selectedCategoryId]);
        },
        error: (err) => console.error('Error fetching products by category', err)
      });
    } else {
      console.log('No category selected, loading all products');
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.productService.getProductList().subscribe({
      next: (data: Product[]) => this.products = data,
      error: (err) => console.error('Error fetching products', err)
    });
  }
}
