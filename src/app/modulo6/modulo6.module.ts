import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Formulario Reactivo



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // Formulario Reactivo
  ],
  exports: [
    LoginComponent
  ]
})
export class Modulo6Module { }
