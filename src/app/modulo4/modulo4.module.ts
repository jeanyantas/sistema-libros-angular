import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' // AGREGARLO
import { Interceptor1Service } from './usuarios/interceptores/interceptor1.service'; // AGREGAR INTERCEPTOR CREADO
import { Modulo1Module } from '../modulo1/modulo1.module'; // Navbar
import { Modulo5Module } from '../modulo5/modulo5.module'; // Footer

@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, // AGREGARLO
    Modulo1Module, // Para cargar el navbar
    Modulo5Module
  ],
  providers: [
    // AGREGAR INTERCEPTORES CREADOS

    // INTERCEPTOR 1
    {
      provide:HTTP_INTERCEPTORS,
      useClass: Interceptor1Service,
      multi: true
    }
  ],
  exports:[UsuariosComponent] // EXPORTAR EL COMPONENTE USUARIOS DEL MODULO 4
})
export class Modulo4Module { }
