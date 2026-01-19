import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(
    public auth: AuthService,
    private router: Router   // ✅ ADD THIS
  ) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']); // ✅ redirect to home
  }
}

