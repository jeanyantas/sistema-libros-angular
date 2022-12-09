import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms'; // Formulario Reactivo
import { Modulo1Module } from '../modulo1/modulo1.module'; // Para cargar el navbar



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Formulario Reactivo
    Modulo1Module // Para cargar el navbar
  ],
  exports:[HomeComponent] // EXPORTAR EL COMPONENTE HOME DEL MODULO2
})
export class Modulo2Module { }
