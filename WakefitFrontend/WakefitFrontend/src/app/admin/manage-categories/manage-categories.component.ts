import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../category';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  categories: Category[] = []; // Initialize as an empty array

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data || []; // Handle cases where data might be null
      },
      error => {
        console.error('Error fetching categories', error);
        // Optionally show an error message to the user
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
