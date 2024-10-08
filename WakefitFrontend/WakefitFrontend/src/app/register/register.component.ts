// src/app/register/register.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', password: '', email: '' };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        // Handle successful registration
        this.successMessage = 'Registration successful. You can now log in.';
        setTimeout(() => this.router.navigate(['/login']), 2000); 
      },
      error: (error) => {
        // Handle registration error
        this.errorMessage = 'Registration failed. Please try again.';
      }
    });
  }
}
