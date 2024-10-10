import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) { }

  login(username: string, password: string, expiresInMins: number = 30): Observable<any> {
    const body = {
      username,
      password,
      expiresInMins
    };

    return this.http.post(this.apiUrl, body, { withCredentials: true });
  }
}