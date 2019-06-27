import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Login = new Login('', '');
  invalidLogin: boolean;
  constructor(private service: LoginService, private router: Router) { }

  Login() {
    this.service.login(this.user).subscribe(response => {
      const token = (response as any).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigateByUrl('/products');
    }, err => {
      this.invalidLogin = true;
      console.log(err);
    });
  }
  ngOnInit() {
  }

}
