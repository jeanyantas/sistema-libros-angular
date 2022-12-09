import { Component, OnInit } from '@angular/core';

// CREAR INTERFACE
interface iFormularioContacto{
  nombres: string;
  apellidos: string;
  correo: string;
  genero: string;
  comentario: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formulario:iFormularioContacto = {
    nombres: '',
    apellidos: '',
    correo: '',
    genero: '',
    comentario: '',
  };

  constructor() { }

  submit(){
    if(this.formulario.nombres == '' || this.formulario.apellidos == '' || this.formulario.correo == '' || this.formulario.genero == '' || this.formulario.comentario == ''){
      alert('Complete Todos Los Datos');
    }else{
      alert('Formulario Enviado');
      this.formulario.nombres = '';
      this.formulario.apellidos = '';
      this.formulario.correo = '';
      this.formulario.genero = '';
      this.formulario.comentario = '';
    }
  }

  ngOnInit(): void {
    
  }

}
