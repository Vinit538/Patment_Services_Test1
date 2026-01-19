import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(data: { username: string; password: string }): Observable<string> {
    return this.http.post(
      `${this.API_URL}/login`,
      data,
      { responseType: 'text' }
    );
  }

  
  register(data: { username: string; password: string }) {
    return this.http.post(
      'http://localhost:8080/register',
      data,
      { responseType: 'text' }
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  // 🔑 THIS FIXES YOUR ERROR
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
