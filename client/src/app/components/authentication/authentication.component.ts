import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/user/state';
import { SendRegisterDataToEffectAction, SendLoginDataToEffectAction } from 'src/app/store/user/action';
import { RegisterUserModel } from 'src/app/core/models/authentication/register-user';
import { LoginUserModel } from 'src/app/core/models/authentication/login-user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  constructor(private store: Store<UserState>) { }

  recievedUserData(userData: RegisterUserModel) {
    this.store.dispatch(new SendRegisterDataToEffectAction(userData))
  }

  loginUser(userData: LoginUserModel) {
    console.log(userData);
    this.store.dispatch(new SendLoginDataToEffectAction(userData));
  }
}
