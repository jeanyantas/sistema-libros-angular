import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './modulo6/guards/login.guard';
// import { LogoutGuard } from './modulo6/guards/logout.guard';
import { LoginComponent } from './modulo6/login/login.component';
import { BarraNavegacionComponent } from './modulo1/barra-navegacion/barra-navegacion.component';
import { HomeComponent } from './modulo2/home/home.component';
import { UsuariosComponent } from './modulo4/usuarios/usuarios.component';
import { ContactoComponent } from './modulo3/contacto/contacto.component';

// Configuración de las rutas para la barra de navegación
const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'navbar', component: BarraNavegacionComponent, canActivate: [LoginGuard], // solo si LoginGuard (guard que se creó) es true (si estamos logeados) cargará la ruta
  },
  {
    path: 'home', component: HomeComponent, canActivate: [LoginGuard],
  },
  {
    path: 'contacto', component: ContactoComponent, canActivate: [LoginGuard],
  },
  {
    path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard],
  },
  {
    path: '**', redirectTo: 'login'
  }
];
// Fin

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Agregar
  exports: [RouterModule]
})
export class AppRoutingModule { }
