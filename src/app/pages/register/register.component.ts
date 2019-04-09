import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "abhishekbunny@gmail.com";
  password = "bunnyabhishek";

  constructor(
    private auth: AuthService
  ) { }

  user;

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => {
      if (!user) {
        this.emailRegister();
      } else {
        this.auth.logout();
      }
    });
  }


  emailRegister() {
    this.auth.emailRegister({email: this.email, password: this.password});
  }
}
