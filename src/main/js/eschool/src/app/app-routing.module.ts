import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [];

const ROUTES: Routes = [
  {
    path: '', component: HeaderComponent,
    children[
      {path: 'students', component: StudentsComponent},
      {path: '', redirectTo:'login', pathMatch: 'full'}
    ]
  }
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
