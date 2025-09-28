import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {
  persona = {nombre:'', edad:''};
  procesar(){
    console.log(this.persona);
    this.persona = {nombre:'', edad:''}; // Resetear el formulario
  }
}
