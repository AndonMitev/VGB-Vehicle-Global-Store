import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RegisterUserModel } from '../../models/authentication/register-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  public registerUser(userData: RegisterUserModel): Observable<RegisterUserModel> {
    return this.http.post<RegisterUserModel>(
      'http://localhost:7000/user/register', userData
    );
  }
}