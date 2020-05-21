import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public logIn(): void {
    this.authService.logIn(this.loginForm.value).then(() => {
      console.log('logged in');
      this.router.navigate([''])
    })
      .catch(() =>
        this.presentToast('TODO Wrong username or password')
      );
  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
  public continueAnonymous(): void {
    this.router.navigate(['']);
  }

  private async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
