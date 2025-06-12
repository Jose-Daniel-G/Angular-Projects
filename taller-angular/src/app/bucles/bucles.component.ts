import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
  
// import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css',
})
export class BuclesComponent {
  // personas: Persona[];
  personas = [
    { nombre: 'John', edad: 30,  },
    { nombre: 'Andrew', edad: 32 },
    { nombre: 'Math', edad: 20   },
    { nombre: 'Clark', edad: 20  },
  ];
}
