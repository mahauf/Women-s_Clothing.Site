import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit{

  router = inject(Router)
  signInForm!: FormGroup;

  constructor(private authService: AuthService){ }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }
  onSubmit(){
    this.authService.signinUser(this.signInForm.value.username, this.signInForm.value.password);
    this.signInForm.reset();
        this.router.navigate(['home'])
  }
}
