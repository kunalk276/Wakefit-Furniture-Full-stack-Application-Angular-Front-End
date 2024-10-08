import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateFeedbackComponent } from './create-feedback.component';
import { FeedbackService } from '../feedback.service';

describe('CreateFeedbackComponent', () => {
  let component: CreateFeedbackComponent;
  let fixture: ComponentFixture<CreateFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CreateFeedbackComponent],
      providers: [FeedbackService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have feedback object initialized', () => {
    expect(component.feedback).toBeDefined();
  });

  it('should set feedbackDate to current date on init', () => {
    const currentDate = new Date();
    component.ngOnInit();
    expect(component.feedback.feedbackDate.toDateString()).toBe(currentDate.toDateString());
  });

  it('should call saveFeedback on form submit', () => {
    spyOn(component, 'saveFeedback');
    component.onSubmit();
    expect(component.saveFeedback).toHaveBeenCalled();
  });
});
