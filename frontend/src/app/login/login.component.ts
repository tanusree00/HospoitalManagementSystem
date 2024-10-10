import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = {
    email: '',
    password: '',
    remember: false
  };

  constructor(private httpClient:ApiCallService,
    private authService:ApiCallService
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  onSubmit() {
    const username = 'emilys';
    const password = 'emilyspass';

    this.authService.login(username, password).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
  }

