import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  class = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.firstname.hasError('required'))
      return 'Это обязатльное поле';

    if (this.lastname.hasError('required'))
      return 'Это обязатльное поле';

    if (this.email.hasError('required'))
      return 'Это обязатльное поле';

    if (this.class.hasError('required'))
      return 'Это обязатльное поле';


    return this.email.hasError('email') ? 'Неправильная почта' : '';
  }

}
