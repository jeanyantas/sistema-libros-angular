import { Component } from '@angular/core';
import { Interceptor1Service } from './interceptores/interceptor1.service'; // AGREGAR

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  // AGREGAR
  usuarios:any = [];
  constructor(private interceptor: Interceptor1Service) { }
  ngOnInit(): void {
    this.interceptor.capturarJSON()
      .subscribe((response: any) => this.usuarios = response);
  }
  // FIN
}
