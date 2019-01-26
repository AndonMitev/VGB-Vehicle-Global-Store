import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUserModel } from '../../models/authentication/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  constructor(private http: HttpClient) { }

  loginUser(userData: LoginUserModel): Observable<LoginUserModel> {
    return this.http.post<LoginUserModel>('http://localhost:7000/user/login', userData);
  }
}