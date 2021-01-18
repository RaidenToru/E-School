import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {StudentService} from "../service/student.service";
import {Student} from "../student";
import {Router} from "@angular/router";

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

  student: Student;

  constructor(private studentService: StudentService, private router: Router) {
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addStudent();
  }

  private addStudent(){
    this.studentService.addStudent(this.student).subscribe(data => this.goToList());
  }

  goToList(){
    window.location.reload();
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
