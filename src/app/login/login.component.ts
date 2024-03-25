import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router) {
    this.userName = '';
    this.password = '';
    this.errorMessage = '';
  }

  login(): void {
    // Perform basic validation
    if (!this.userName || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    // Example authentication logic (replace this with your actual authentication logic)
    if (this.userName.toLowerCase() === 'admin' && this.password === 'Admin123') {
      this.router.navigate(['/dashboard/places']);
      localStorage.setItem('IsAuthorized', 'true');
      localStorage.setItem('IsAdmin', 'true');
    } else if (this.userName.toLowerCase() === 'karthik' && this.password === 'Karthik123') {
      this.router.navigate(['/dashboard/places']);
      localStorage.setItem('IsAuthorized', 'true');
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
