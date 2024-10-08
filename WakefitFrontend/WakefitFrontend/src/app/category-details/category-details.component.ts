import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Product } from '../product';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  categoryId!: number;
  category!:Category;
  products: Product[] = [];
  router: any;
  

  constructor(private categoryService: CategoryService,private route: ActivatedRoute)
    
  {}


  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params['categoryId'];
    this.category = new Category(); 
    this.categoryService.getCategoryById(this.categoryId).subscribe(data=>{
      this.category=data;
    })
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
