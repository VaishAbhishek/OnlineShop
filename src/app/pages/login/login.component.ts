import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }
  user;
  email = "abhishekbunny@gmail.com";
  password = "bunnyabhishek";

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => {
      if (user && this.user) {
        this.auth.logout();
        this.user = null;
      } else {
        this.auth.emailLogin(this.email, this.password);
        this.user = user;
      }
    })
  }

}
