import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeedbackViewComponent } from './product-feedback-view.component';

describe('ProductFeedbackViewComponent', () => {
  let component: ProductFeedbackViewComponent;
  let fixture: ComponentFixture<ProductFeedbackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFeedbackViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFeedbackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
