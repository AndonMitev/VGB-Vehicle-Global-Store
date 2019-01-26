import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SendRegisterDataToEffectAction, SendRegisterDataToEffect, SendLoginDataToEffectAction, SendLoginDataToEffect, SaveUserDataAction } from './action';
import { switchMap, tap, map } from 'rxjs/operators';
import { RegisterUserService } from 'src/app/core/services/authentication/register.service';
import { LoginUserService } from 'src/app/core/services/authentication/login.service';
import { LoggedInUserModel } from 'src/app/core/models/authentication/logged-in-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  @Effect({ dispatch: false })
  registerUser = this.actions$
    .pipe(
      ofType<SendRegisterDataToEffectAction>(SendRegisterDataToEffect),
      switchMap(action => this.registerUserService.registerUser(action.payload)));


  @Effect()
  loginUser = this.actions$
    .pipe(
      ofType<SendLoginDataToEffectAction>(SendLoginDataToEffect),
      switchMap(action => this.loginUserService.loginUser(action.payload)
        .pipe(
          map((response) => {
            const token = response['token'];
            const userData = response['userData'];
            localStorage.setItem('token', token);
            this.router.navigateByUrl('/car/all');
            return new SaveUserDataAction({ token, ...userData });
          })
        ))
    )

  constructor(
    private actions$: Actions,
    private registerUserService: RegisterUserService,
    private loginUserService: LoginUserService,
    private router: Router) { }
}