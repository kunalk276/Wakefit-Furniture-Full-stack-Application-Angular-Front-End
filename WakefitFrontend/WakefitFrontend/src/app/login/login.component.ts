import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  errorMessage: string | null = null;
  loading: boolean = false;
  isPasswordVisible: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loading = true;
    this.errorMessage = null;

    console.log('Credentials:', this.credentials); 

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Response:', response); 
        
        if (response.role) {
          localStorage.setItem('role', response.role); 

          if (response.role === 'ADMIN') {
            this.router.navigate(['/dashboard']); 
          } else {
            this.router.navigate(['/']); 
          }
        } else {
          this.errorMessage = 'Unexpected error: Missing role in response.';
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password.'; 
        } else if (error.status === 0) {
          this.errorMessage = 'Unable to connect to the server. Please try again later.';
        } else {
          this.errorMessage = `Login failed: ${error.message}`;
        }
      },
      complete: () => {
        this.loading = false; 
      }
    });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }
}
