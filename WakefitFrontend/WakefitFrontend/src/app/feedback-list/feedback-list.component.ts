import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks!: Feedback[];

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  private getFeedbacks() {
    this.feedbackService.getFeedbackList().subscribe(data => {
      this.feedbacks = data;
    });
  }

  feedbackDetails(feedbackId: number) {
    this.router.navigate(['feedback-details', feedbackId]);
  }

  updateFeedback(feedbackId: number) {
    this.router.navigate(['update-feedback', feedbackId]);
  }

  deleteFeedback(feedbackId: number) {
    this.feedbackService.deleteFeedback(feedbackId).subscribe(data => {
      console.log(data);
      this.getFeedbacks();
    });
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }
}
