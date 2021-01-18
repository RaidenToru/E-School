import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  constructor() { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Это обязательное поле';
    }
    if (this.password.hasError('required')) {
      return 'Это обязательное поле';
    }

    return this.email.hasError('email') ? 'Не правильная почта' : '';
  }

  ngOnInit(): void {
  }

}
