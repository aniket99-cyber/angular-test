import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'dummyuser@meil.com' && password === '12345678') {
      this.isAuthenticated = true;
      localStorage.setItem('user', 'dummyuser');
      this.router.navigate(['profile']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('user') !== null;
  }
}
