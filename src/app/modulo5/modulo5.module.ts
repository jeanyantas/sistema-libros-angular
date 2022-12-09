import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent] // EXPORTAR EL COMPONENTE FOOTER DEL MODULO 5
})
export class Modulo5Module { }
