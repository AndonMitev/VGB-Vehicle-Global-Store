import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() onFormSubmit = new EventEmitter();

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initializeRegisterForm();
  }

  public initializeRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      region: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });
  }

  public submitRegisterForm(): void {
    const {confirmPassword, confirmEmail, ...userData} = this.registerForm.value;
    this.onFormSubmit.emit(userData);
  }

  public get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  public get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  public get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword');
  }

  public get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  public get confirmEmail(): AbstractControl {
    return this.registerForm.get('confirmEmail');
  }

  public get country(): AbstractControl {
    return this.registerForm.get('country');
  }

  public get region(): AbstractControl {
    return this.registerForm.get('region');
  }

  public get city(): AbstractControl {
    return this.registerForm.get('city');
  }
}
