import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { Login } from '../login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service: SignUpService, private router: Router) { }

  user: Login = new Login('', '');
  invalidSignUp: boolean;
  SignUp() {
    this.service.SignUp(this.user).subscribe(response => {
      const token = (response as any).token;
      localStorage.setItem('jwt', token);
      this.invalidSignUp = false;
      this.router.navigateByUrl('/products');
    }, err => {
      this.invalidSignUp = true;
      console.log(err);
    });
  }
  ngOnInit() {
  }


}
