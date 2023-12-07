import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from './auth-model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signupUser(username: string, password: string){

    const authData: AuthModel = {username: username, password: password};

    this.http.post('http://localhost:3000/signup/', authData).subscribe(res => {
      console.log(res);
      alert("Account created Successfully")
    })
  }

  signinUser(username: string, password: string){

    const authData: AuthModel = {username: username, password: password};

    this.http.post('http://localhost:3000/signin/', authData).subscribe(res => {
      console.log(res);
      alert("successfully signed-In")
    })
  }
}
