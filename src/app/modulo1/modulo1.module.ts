import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';



@NgModule({
  declarations: [
    BarraNavegacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BarraNavegacionComponent] // EXPORTAR EL COMPONENTE BARRA-NAVEGACION DEL MODULO1
})
export class Modulo1Module { }
