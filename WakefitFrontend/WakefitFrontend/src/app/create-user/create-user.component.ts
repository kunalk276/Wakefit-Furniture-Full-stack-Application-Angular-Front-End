import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  errorMessage: string = '';
  isPasswordVisible: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  saveUser() {
    this.user.role = 'customer'; 
    
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        
        this.GoToUserList(data.userId); 
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message || 'An error occurred while creating the user.';
      }
    );
  }

  GoToUserList(userId: number) {
    this.router.navigate(['/profile', userId]);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

  validateNumber(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }
}
