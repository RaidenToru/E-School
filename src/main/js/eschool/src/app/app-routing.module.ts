import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      {path: '', redirectTo:'students', pathMatch: 'full'},
      {path: 'students', component: StudentsComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'students', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
