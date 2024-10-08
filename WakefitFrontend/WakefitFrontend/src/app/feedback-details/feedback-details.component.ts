// src/app/feedback-details/feedback-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
  feedbackId!: number;
  feedback!: Feedback;
product: any;

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedbackId = this.route.snapshot.params['feedbackId'];
    this.feedback = new Feedback();
    this.feedbackService.getFeedbackById(this.feedbackId).subscribe(data => {
      this.feedback = data;
    });
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }

  goBack(): void {
    this.router.navigate(['/feedbacks']);
  }
}
