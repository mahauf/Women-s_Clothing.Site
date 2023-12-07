import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { SignInComponent } from '../signin/signin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  router = inject(Router)
  signupForm!: FormGroup;

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'fullname': new FormControl('', [Validators.required]),
      'username': new FormControl('',[Validators.required]),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    this.authService.signupUser(this.signupForm.value.username, this.signupForm.value.password)
    this.signupForm.reset();
        this.router.navigate(['signin'])

  
  }

}
