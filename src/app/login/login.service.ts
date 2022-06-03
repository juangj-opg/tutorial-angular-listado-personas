import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, Auth } from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((currentUser) => {
      currentUser.user.getIdToken().then((token) => {
        this.token = token;
        this.router.navigate(['/']);
      });
    });
  }

  getIdToken() {
    return this.token;
  }
}
