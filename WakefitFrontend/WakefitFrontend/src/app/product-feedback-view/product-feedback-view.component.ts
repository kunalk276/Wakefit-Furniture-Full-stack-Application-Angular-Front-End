import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-product-feedback-view',
  templateUrl: './product-feedback-view.component.html',
  styleUrls: ['./product-feedback-view.component.css']
})
export class ProductFeedbackViewComponent implements OnInit {
  productId!: number;
  product!: any; 
  feedbacks: Feedback[] = [];
  isLoading: boolean = true; 
  errorMessage: string | null = null; 

  stars: Array<number> = [1, 2, 3, 4];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['productId'];
    
    this.productService.getProductById(this.productId).subscribe(product => {
      this.product = product;
    });

    this.productService.getFeedbacksByProductId(this.productId).subscribe(
      (feedbacks: Feedback[]) => {
        this.feedbacks = feedbacks;
        this.isLoading = false;
      },
      error => {
        this.errorMessage = 'Failed to load feedbacks. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }

  goToProductDetails() {
    this.router.navigate(['/product-details', this.productId]);
  }

  exploreProducts() {
    this.router.navigate(['/viewproduct']);
  }
}
