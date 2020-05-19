import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) { }
  public signIn(userData: User){
    localStorage.setItem('user', JSON.stringify(userData));
  }
  public isLoggedIn(){
    return localStorage.getItem('user') !== null;
  }
  public logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}