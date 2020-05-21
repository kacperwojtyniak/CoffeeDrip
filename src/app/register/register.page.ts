import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {


  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public register(): void {
    this.authService.register(this.registerForm.value)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

}
