import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Formulario Reactivo
import { Modulo5Module } from '../modulo5/modulo5.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Formulario Reactivo
    Modulo5Module
  ],
  exports: [
    LoginComponent
  ]
})
export class Modulo6Module { }
