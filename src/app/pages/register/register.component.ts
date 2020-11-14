import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public onSubmit() {
    const values = this.registerForm.getRawValue();
    this.authService.register(values.email, values.password);
  }

  public googleAuth() {
    this.authService.googleAuth();
  }

}
