import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentURL: string;
  constructor(private httpClient: HttpClient) {
    this.studentURL = 'http://localhost:8080/student';
  }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.studentURL}s`);
  }

  addStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.studentURL}/add`, student);
  }

  deleteStudent(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.studentURL}/delete/${id}`);
  }
}
