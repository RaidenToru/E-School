import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import {MatDialog} from "@angular/material/dialog";
import {StudentAddComponent} from "../student-add/student-add.component";
import {StudentService} from "../service/student.service";

const ELEMENTS: Student[] = [
  {id: 1, firstName: 'Ali', lastName: 'Baitas', email: 'asd@asd.asd', performance: 'Отличник'},
  {id: 2, firstName: 'Ne', lastName: 'Li', email: 'qwe@qwe.qwe', performance: 'Хорошист'},
  {id: 3, firstName: 'Ekscalibure', lastName: 'Xiungjuier', email: 'qweasd@qwe.asd', performance: 'Хорошист'},
  {id: 4, firstName: 'E', lastName: 'Xung', email: '10/10/2000', performance: 'Хорошист'}
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'performance', 'delete'];
  students! : Student[];

  constructor(public dialog: MatDialog, private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getAllStudents().subscribe(data=>{
      this.students = data;
    })
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(data => {
      this.getStudents();
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentAddComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Результат: ${result}`);
    });
  }

}
