import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback();
  productId: number | null = null; 
  ratingError: string | null = null; 

  @ViewChild('rating') ratingField!: ElementRef; 

  constructor(
    private feedbackService: FeedbackService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('productId');
      if (id) {
        this.productId = +id; 
        this.feedback.productId = this.productId; 
      }
    });
  }

  saveFeedback() {
    this.feedbackService.createFeedback(this.feedback).subscribe(
      data => {
        console.log(data);
        this.goToFeedbackList(); 
      },
      error => console.log(error)
    );
  }

  goToFeedbackList() {
    if (this.productId !== null) {
      this.router.navigate(['/product-feedback-view', this.productId]); 
    }
  }

  onSubmit() {
    if (!this.feedback.productId) {
      console.error('Product ID is not set.');
      return;
    }
    this.feedback.feedbackDate = new Date(); 

    
    if (this.feedback.rating < 1 || this.feedback.rating > 5) {
      this.ratingError = 'Rating must be between 1 and 5.';
      return;
    } else {
      this.ratingError = null; 
    }

    console.log(this.feedback);
    this.saveFeedback();
  }

  onRatingChange() {
    
    if (this.feedback.rating && (this.feedback.rating < 1 || this.feedback.rating > 5)) {
      this.feedback.rating = Math.min(Math.max(this.feedback.rating, 1), 5); 
      this.ratingError = 'Rating must be between 1 and 5.';
    } else {
      this.ratingError = null; 
    }
    this.animateRating(); 
  }

  animateRating() {
    
    const ratingElement = this.ratingField.nativeElement;
    ratingElement.classList.add('rating-animation');
    setTimeout(() => ratingElement.classList.remove('rating-animation'), 1000);

    ratingElement.classList.add('rating-pulse');
    setTimeout(() => ratingElement.classList.remove('rating-pulse'), 1000);
  }
}
