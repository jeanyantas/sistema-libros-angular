import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';

import { FormsModule } from '@angular/forms'; // Formulario Template
import { Modulo1Module } from '../modulo1/modulo1.module'; // Navbar
import { Modulo5Module } from '../modulo5/modulo5.module'; // Footer


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Formulario Template
    Modulo1Module, // Para cargar el navbar
    Modulo5Module
  ],
  exports:[ContactoComponent] // EXPORTAR EL COMPONENTE CONTACTO DEL MODULO3
})
export class Modulo3Module { }
