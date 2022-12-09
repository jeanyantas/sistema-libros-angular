import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms'; // Formulario Reactivo
import { Modulo1Module } from '../modulo1/modulo1.module'; // Navbar
import { Modulo5Module } from '../modulo5/modulo5.module'; // Footer



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Formulario Reactivo
    Modulo1Module, // Para cargar el navbar
    Modulo5Module
  ],
  exports:[HomeComponent] // EXPORTAR EL COMPONENTE HOME DEL MODULO2
})
export class Modulo2Module { }
