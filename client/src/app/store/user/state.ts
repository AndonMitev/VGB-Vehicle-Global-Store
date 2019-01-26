import { RegisterUserModel } from 'src/app/core/models/authentication/register-user';
import { LoginUserModel } from 'src/app/core/models/authentication/login-user';

export class UserState {
  user: RegisterUserModel;
  userData: LoginUserModel;
}