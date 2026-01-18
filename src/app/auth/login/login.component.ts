import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,                 // ✅ REQUIRED
  imports: [FormsModule],            // ✅ REQUIRED for ngModel
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (token: string) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/payment']);
      },
      error: () => {
        alert('Invalid credentials');
      }
    });
  }
}
