import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/login'; // Your login URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const urlWithParams = `${this.baseUrl}?mail=${encodeURIComponent(
      email
    )}&motDePasse=${encodeURIComponent(password)}`;

    return this.http.post<any>(urlWithParams, null).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }
}
