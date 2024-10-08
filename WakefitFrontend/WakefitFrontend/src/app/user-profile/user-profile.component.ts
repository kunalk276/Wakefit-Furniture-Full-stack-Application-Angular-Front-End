import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | undefined;
  userId: number | undefined;
  isPasswordVisible: boolean = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.userId = +this.route.snapshot.paramMap.get('userId')!;
    if (this.userId) {
     
      this.userService.getUserById(this.userId).subscribe((user: User) => {
        this.user = user;
      });
    }
  }

  onSubmit(): void {
    if (this.user && this.userId) {
      this.userService.updateUser(this.userId, this.user).subscribe(
        response => {
          alert('Profile updated successfully');
        },
        error => {
          alert('Failed to update profile');
        }
      );
    }
  }
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }
}
