import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: firebase.User;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    console.log('Auth service constructor!');
    this.firebaseAuth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  public register(registerForm) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(registerForm.email, registerForm.password)
        .then(res => {
          console.log(`SETTING DISPLAY NAME: ${registerForm.displayName}`);
          res.user.updateProfile({ displayName: registerForm.displayName, photoURL: '' });
        })
        .catch(err => {
          console.error(err);
          reject(err);
        })
    })
  }

  public logIn(loginForm) {
    const email = loginForm.email as string;
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email.trim(), loginForm.password);
  }

  public logOut(): void {
    this.firebaseAuth.auth.signOut();
    console.log('logged out');
  }

  public isAuthorized(): boolean {
    if (this.user) return true;
    return false;
  }

  public getUserName(): string {
    return this.currentUser.displayName;
  }

  public getUserNameObs(): Observable<string> {
    return this.firebaseAuth.authState
      .pipe(map(user => {
        if (user) {
          return user.displayName;
        }
        return undefined;
      }));
  }

  get user(): firebase.User {
    return this.currentUser;
  }

  public getUserId(): string {
    return this.currentUser.uid;
  }

}
