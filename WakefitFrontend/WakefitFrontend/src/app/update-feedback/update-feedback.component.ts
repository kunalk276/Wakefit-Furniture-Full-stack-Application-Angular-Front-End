import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';  // Ensure this path is correct

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent implements OnInit {
  feedbackId!: number;
  feedback: Feedback = new Feedback();

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedbackId = this.route.snapshot.params['feedbackId'];
    this.feedbackService.getFeedbackById(this.feedbackId).subscribe(data => {
      this.feedback = data;
    }, error => console.log(error));
  }

  onSubmit(): void {
    this.feedbackService.updateFeedback(this.feedback.feedbackId, this.feedback).subscribe(data => {
      console.log(data);
      this.router.navigate(['/feedbacks']);
    }, error => console.log(error));
  }

  goToFeedbackList(): void {
    this.router.navigate(['/feedbacks']);
  }
}
