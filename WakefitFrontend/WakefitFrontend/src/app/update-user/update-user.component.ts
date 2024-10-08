// update-user.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId!: number ; 
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  this.userService.getUserById(this.userId).subscribe(
    data => {
      this.user = data;
    },
    error=>console.log(error));
  
}
onSubmit() 
{
   this.userService.updateUser(this.userId,this.user).subscribe(data=>{
    this.goToUserList();
   },error=>console.log(error));


  
}  goToUserList() {
  this.router.navigate(['/users']);
}
  }

