import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submissionSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$') // Only Gmail addresses allowed
      ]],
      mobile: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$') // Must be a 10-digit mobile number
      ]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      file: [null]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')?.value);
      formData.append('email', this.contactForm.get('email')?.value);
      formData.append('mobile', this.contactForm.get('mobile')?.value);
      formData.append('category', this.contactForm.get('category')?.value);
      formData.append('description', this.contactForm.get('description')?.value);

      // Append file if selected
      if (this.contactForm.get('file')?.value) {
        formData.append('file', this.contactForm.get('file')?.value);
      }

      this.http.post('http://localhost:3000/send-email', formData).subscribe(
        (response) => {
          console.log(response);
          this.submissionSuccess = true;
          this.contactForm.reset();
        },
        (error) => {
          console.error(error);
          alert('Error sending email. Please try again later.');
        }
      );
    }
  }

  // This method allows only numeric values in the mobile number input
  validateNumber(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
