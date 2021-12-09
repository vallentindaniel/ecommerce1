import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user/user';
import { DataStorageService } from '../data-storage/data-storage.service';

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user = new Subject<User>();

  isLogged: boolean = false;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private http: HttpClient,
    private dataStorageService: DataStorageService
  ) {
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCuvwfmPuDcCsi5xX_Lxw8QLXKRfEHcSn8", {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorRes => {
      let errorMessage = "An unknown error occured";
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case'EMAIL_NOT_FOUND':
          errorMessage = "Email not found";
          break;
        case'INVALID_PASSWORD':
          errorMessage = "Invalid password";
          break;
        case'USER_DISABLED':
          errorMessage = "This user is disabled";
          break;
      }
      return throwError(errorMessage);
    }), tap(resData =>{
      const user = new User();
      // +resData.expiresIn converts data to number;
      const expDate = new Date( new Date().getTime() + +resData.expiresIn*1000); // expTime in miliseconds
      user.setUser(resData.email, resData.localId, resData.idToken, expDate);
      this.user.next(user);
      this.isLogged = true;
      localStorage.setItem('isUserLoggedIn', this.isLogged ? "true" : "false");
      this.dataStorageService.user.next(true);
    }) );
  }

  register(email: string, password: string) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCuvwfmPuDcCsi5xX_Lxw8QLXKRfEHcSn8", {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorRes => {
      let errorMessage = "An unknown error occured";
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case'EMAIL_EXISTS':
          errorMessage = "This email already exists";
      }
      return throwError(errorMessage);
    }), tap(resData =>{
      const user = new User();
      // +resData.expiresIn converts data to number;
      const expDate = new Date( new Date().getTime() + +resData.expiresIn*1000); // expTime in miliseconds
      user.setUser(resData.email, resData.localId, resData.idToken, expDate);
      this.user.next(user);

    }));
  }

  logout(): void {
    this.isLogged = false;
       localStorage.removeItem('isUserLoggedIn');
    }





}
