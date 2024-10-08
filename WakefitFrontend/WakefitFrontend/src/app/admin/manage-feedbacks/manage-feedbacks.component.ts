import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Feedback } from '../../feedback';
import { FeedbackService } from '../../feedback.service';

@Component({
  selector: 'app-manage-feedbacks',
  templateUrl: './manage-feedbacks.component.html',
  styleUrls: ['./manage-feedbacks.component.css']
})
export class ManageFeedbacksComponent implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  private getFeedbacks(): void {
    this.feedbackService.getFeedbackList().subscribe(
      data => this.feedbacks = data,
      error => console.error('Error fetching feedbacks', error)
    );
  }

  viewFeedback(feedbackId: number): void {
    this.router.navigate(['feedback-details', feedbackId]);
  }

  updateFeedback(feedbackId: number): void {
    this.router.navigate(['update-feedback', feedbackId]);
  }

  deleteFeedback(feedbackId: number): void {
    this.feedbackService.deleteFeedback(feedbackId).subscribe(
      () => {
        console.log(`Feedback ${feedbackId} deleted successfully`);
        this.getFeedbacks(); // Refresh the list after deletion
      },
      error => console.error('Error deleting feedback', error)
    );
  }
}
