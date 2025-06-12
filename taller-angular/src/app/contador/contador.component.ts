import { Component } from '@angular/core';
// import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  numero:number =1;
  decrementar(){
    this.numero--;
  }
  incrementar(){
    this.numero++;
  }

  nombre = 'nombre';
  persona = {
    nombre: 'John',
    edad: 30
  };
  // persona:Persona = {
  //   nombre: 'John',
  //   edad: 30
  // }
}
