import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import {MatDialog} from "@angular/material/dialog";
import {StudentAddComponent} from "../student-add/student-add.component";
import {StudentService} from "../service/student.service";

const ELEMENTS: Student[] = [
  {id: 1, firstName: 'Ali', lastName: 'Baitas', birthDate: '10/10/2010', class: 10},
  {id: 2, firstName: 'Ne', lastName: 'Li', birthDate: '10/10/2020', class: 5},
  {id: 3, firstName: 'Ekscalibure', lastName: 'Xiungjuier', birthDate: '10/10/2020', class: 5},
  {id: 4, firstName: 'E', lastName: 'Xung', birthDate: '10/10/2000', class: 11}
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'class', 'delete'];
  students = ELEMENTS;
  constructor(public dialog: MatDialog, private studentService: StudentService) { }

  private getStudents(){
    this.studentService.getAllStudents().subscribe(data=>{
      this.students = data;
    })
  }

  ngOnInit(): void {
    this.getStudents();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentAddComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Результат: ${result}');
    });
  }

}
