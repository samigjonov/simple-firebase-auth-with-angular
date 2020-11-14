import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) {
    this.angularFireAuth.authState.subscribe(user => {
      this.user = user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['profile']);
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  public login(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['profile']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }


  public register(email, password) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.sendVerification();
        this.router.navigate(['profile']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  public async sendVerification() {
    return (await this.angularFireAuth.currentUser).sendEmailVerification()
      .then(() => {
        // this.router.navigate(['email-verification']);
      });
  }

  public get isAuthenticated() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    // currentUser.isEmailVerified
    return currentUser;
  }

  public googleAuth() {
    return this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['profile']);
      }).catch((error) => {
        window.alert(error);
      });
  }

  public logout() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
