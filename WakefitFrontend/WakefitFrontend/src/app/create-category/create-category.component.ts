// create-category.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Product } from '../product'; 

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  category: Category = new Category();

  constructor(private categoryService: CategoryService, private router: Router) {}

  onSubmit() {
   
    this.categoryService.createCategory(this.category).subscribe(
      (data) => {
        console.log('Category created successfully', data);
        this.router.navigate(['/categories']);
      },
      (error) => console.error('Error creating category', error)
    );
  }
}
