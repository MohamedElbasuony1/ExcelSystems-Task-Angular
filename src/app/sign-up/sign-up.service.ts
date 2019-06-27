import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http: HttpClient) { }
  SignUp(user: Login) {
    return this.http.post('http://localhost:50291/api/Authenticate/SignUp', user);
    }
}
