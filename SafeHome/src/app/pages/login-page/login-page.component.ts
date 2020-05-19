import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { LoginService } from  '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  // loading = false;
  returnUrl: string;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // this.loading = true;
    this.loginService.signIn(this.loginForm.value);
    this.router.navigateByUrl('/game'); // todo: check routing
  }
}
