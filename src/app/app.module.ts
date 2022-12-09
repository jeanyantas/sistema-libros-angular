import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Agregar
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// IMPORTAR MODULOS
import { Modulo1Module } from './modulo1/modulo1.module'; // Módulo barra de navegación
import { Modulo2Module } from './modulo2/modulo2.module'; // Módulo Home
import { Modulo3Module } from './modulo3/modulo3.module'; // Módulo Contacto
import { Modulo4Module } from './modulo4/modulo4.module'; // Módulo Usuarios (Carga de JSON)
import { Modulo5Module } from './modulo5/modulo5.module'; // Módulo Footer
import { Modulo6Module } from './modulo6/modulo6.module'; // Módulo Login

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Agregar
    AppRoutingModule,
    RouterModule,
    Modulo1Module,
    Modulo2Module,
    Modulo3Module,
    Modulo4Module,
    Modulo5Module,
    Modulo6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
