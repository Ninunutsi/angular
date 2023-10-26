import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Simulate login for demonstration purposes
  login() {
    this.isAuthenticated = true;
  }

  // Simulate logout for demonstration purposes
  logout() {
    this.isAuthenticated = false;
  }

  // Check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
