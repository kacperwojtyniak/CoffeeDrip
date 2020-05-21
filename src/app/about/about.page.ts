import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  public userName: string;
  private usernameSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usernameSubscription = this.authService.getUserNameObs()
    .subscribe(name => this.userName = name);
  }

  ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
  }

  logOut() {
    this.authService.logOut();
  }

  logIn() {
    this.router.navigate(['./login']);
  }
}
