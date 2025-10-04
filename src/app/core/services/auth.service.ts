import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {    // Managing tokens and login states

  private token$ = new BehaviorSubject<string | null>(null);

  constructor(private router: Router, private http: HttpClient) { 
    const savedToken = localStorage.getItem('token');
    if (savedToken) this.token$.next(savedToken);
  }

  login(username: string, password: string) {
    return this.http.post<{ accessToken: string }>(API_ENDPOINTS.LOGIN, { username, password })
      .pipe(tap(res => {
        this.token$.next(res.accessToken),
        localStorage.setItem('token', res.accessToken);
        console.log("Login Successful", res.accessToken)
      }));
  }

  logout() { 
    if (!confirm('Are you sure you want to logout?')) return;
    this.token$.next(null); 
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get token() { return this.token$.value; }

  isLoggedIn() { return !!this.token$.value; }

  get token$Observable() {
    return this.token$.asObservable();
  }
}
