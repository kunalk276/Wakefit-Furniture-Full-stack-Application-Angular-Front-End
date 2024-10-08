import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  
  category: Category = new Category();   
  categoryId!: number;

  constructor(
    private categoryService: CategoryService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() : void {
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      data => {
        this.category = data;
      },
      error=>console.log(error));
  }

  onSubmit() 
  {
     this.categoryService.updateCategory(this.categoryId,this.category).subscribe(data=>{
      this.goToCategoryList();
     },error=>console.log(error));
  
      }
  goToCategoryList() {
    this.router.navigate(['/categories']);
  }
}
