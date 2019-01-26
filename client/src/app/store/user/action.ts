import { Action } from '@ngrx/store';
import { LoginUserModel } from 'src/app/core/models/authentication/login-user';
import { RegisterUserModel } from 'src/app/core/models/authentication/register-user';
import { LoggedInUserModel } from 'src/app/core/models/authentication/logged-in-user';

export const SendRegisterDataToEffect = 'This will send and validate user data in effect';
export const SendLoginDataToEffect = 'This will send and validate user login data in effect';
export const SaveUserData = 'This will save user data after logged in';

export class SendRegisterDataToEffectAction implements Action {
  readonly type: string = SendRegisterDataToEffect;
  constructor(public payload: RegisterUserModel) { }
}

export class SendLoginDataToEffectAction implements Action {
  readonly type: string = SendLoginDataToEffect;
  constructor(public payload: LoginUserModel) { }
}

export class SaveUserDataAction implements Action {
  readonly type: string = SaveUserData;
  constructor(public payload: LoggedInUserModel) { }
}

export type AuthenticationActionTypes = SaveUserDataAction;