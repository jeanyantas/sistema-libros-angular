import { Component, OnInit } from '@angular/core';

import { Resenia } from './models/resenia';                                       // Importar el modelo Resenia que se creó antes (Dentro del componente)
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // Importar FormControl y Validators de Formularios Reactivos
import { debounceTime } from 'rxjs/operators';                                    // Importar un operador que permite colocar un tiempo de inactividad para la escucha del formulario reactivo

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    // Escuchar reactivamente mientras se escribe en el input correo e imprimirlo en la consola
    // this.correoCtrl.valueChanges
    // Configurando un tiempo de inactividad a la escucha activa del formulario
    // .pipe(
    //   debounceTime(350)
    // )
    // Imprime el valor del input en la consola esperando 350 ms 
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  // Para llamadas a Servidor o Renderizar
  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      dniCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],          // Primer Argumento: Valor por Default; Segundo Argumento: Validaciones Síncronas.
      nombresCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      apellidosCtrl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      correoCtrl: ['', [Validators.email, Validators.required, Validators.maxLength(30)]],
      generoCtrl: ['', [Validators.required]],
      nombreLibroCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      autorCtrl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      puntuacionCtrl: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
      comentarioCtrl:  ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    });

    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  // INICIO CRUD
    // Se crea un array reseniaArray para guardar todos los objetos que se crean en el formulario del HTML.
    reseniaArray: Resenia[] = [];

    // Crear una variable selectedResenia de tipo clase Resenia como un objeto vacío
    selectedResenia: Resenia = new Resenia();

    // Método DELETE
    eliminar(resenia: Resenia){
      for (let i = 0; i < this.reseniaArray.length; i++){
        if (resenia.id == this.reseniaArray[i].id){
          this.reseniaArray.splice(this.reseniaArray.indexOf(this.reseniaArray[i]), 1);
        }
      }
    }

    save(event: Event) {
      event.preventDefault();
      const value = this.form.value;
      // console.log(value);
    
      // Crear Reseña
      if(this.selectedResenia.id === 0){ // Si el id de la reseña es 0, según la clase creada y su valor iniciado en 0 significa que no hemos seleccionado ninguna reseña
        this.selectedResenia.id = this.reseniaArray.length + 1; // Asignar un valor al id sumandole 1 a la longitud del array (tabla)
        this.reseniaArray.push(this.selectedResenia); // Agregar el objeto (datos del formulario) al array (tabla)
      }
      // Editar Reseña
      this.selectedResenia = new Resenia(); // Limpiar el formulario
    }

    // Método EDIT
    openForEdit(resenia: Resenia){
      this.selectedResenia = resenia;
    }
  // FIN CRUD

  // Recuperando valores de los inputs del formulario con Formularios Reactivos
  // getCorreo(event: Event){
  //   event.preventDefault();
  //   console.log(this.correoCtrl.value);
  // }

  get correoField(){
    return this.form.get('correoCtrl');
  }

}
