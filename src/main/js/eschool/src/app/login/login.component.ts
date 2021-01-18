import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  user_login: string;
  user_password: string;


  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.user_login = '';
    this.user_password = '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Это обязательное поле';
    }

    return this.email.hasError('email') ? 'Не правильная почта' : '';
  }

  getPassErrorMessage(){
    return this.password.hasError('required') ? 'Это обязательное поле' : '';
  }

  ngOnInit(): void {
      if (sessionStorage.getItem('user')=='teacher@edu.kz')
        this.router.navigateByUrl('/students');
      else
        sessionStorage.setItem('user', '');
  }

  login(){
    let error = '';
    if(this.user_login != 'teacher@edu.kz') error+= '[Неправильная почта] ';
    if(this.user_password != 'teacher') error+= ' [Неправильный пароль]';

    if(error == ''){
      sessionStorage.setItem('user', this.user_login);
      this.router.navigateByUrl('/students');
    }else{
      this.snackBar.open(error,'Закрыть',{
        duration:2000,
        horizontalPosition: "center",
        verticalPosition: "top"
      })
    }
  }

}
