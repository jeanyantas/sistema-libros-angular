import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
      
  }

  logout(): void{
    localStorage.removeItem('login');
    console.log('Cerrando sesión...');
  }

}
