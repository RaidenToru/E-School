import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsURL: string;
  constructor(private httpClient: HttpClient) {
    this.studentsURL = 'http://localhost:8000/students';
  }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>('${this.studentsURL}');
  }
}
