import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() onFormSubmit = new EventEmitter();

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initializeLoginForm();
  }

  public initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })
  }

  public submitLoginForm(): void {
    console.log(this.loginForm.value);
    this.onFormSubmit.emit(this.loginForm.value);
  }

  public get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
