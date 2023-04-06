import { Component } from '@angular/core';
import { UserService } from '../servive/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userService: UserService){

  }
  
ngOnInit(){
  this.userService.profile();
}
logout() {
  this.userService.logout();
}
}




