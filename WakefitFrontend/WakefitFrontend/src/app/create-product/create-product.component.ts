import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  selectedCategoryId: number | undefined;
  product: Product = {
    name: '', description: '', price: 0,
    images: '',
    stockQuantity: 0,
    category: undefined,
    rating: undefined,
    orders: undefined,
   
    stockStatus: undefined,
    feedbackCount: 0
  };
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error('Error fetching categories', error)
    );
  }

  onSubmit(): void {
    if (this.selectedCategoryId !== undefined) {
      this.product.categoryId = this.selectedCategoryId;
    }

    this.productService.createProduct(this.product).subscribe(
      data => {
        console.log('Product created successfully', data);
        this.router.navigate(['/manage-products']);
      },
      error => console.error('Error creating product', error)
    );
  }
}
