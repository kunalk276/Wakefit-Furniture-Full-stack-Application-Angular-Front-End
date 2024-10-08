// src/app/category-list/category-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = []; 

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data || []; 
      },
      error => {
        console.error('Error fetching categories', error);
        
      }
    );
  }

  categoryDetails(categoryId: number | undefined): void {
    if (categoryId !== undefined) {
      this.router.navigate(['category-details', categoryId]);
    } else {
      console.error('Category ID is undefined');
      // Optionally show an error message to the user
    }
  }

  updateCategory(categoryId: number | undefined): void {
    if (categoryId !== undefined) {
      this.router.navigate(['update-category', categoryId]);
    } else {
      console.error('Category ID is undefined');
      // Optionally show an error message to the user
    }
  }

  deleteCategory(categoryId: number | undefined): void {
    if (categoryId !== undefined) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          console.log(`Category ${categoryId} deleted successfully`);
          this.getCategories(); // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting category', error);
          // Optionally show an error message to the user
        }
      );
    } else {
      console.error('Category ID is undefined');
      // Optionally show an error message to the user
    }
  }
}
