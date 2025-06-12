import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {

  formUser: FormGroup;
  constructor(private fb: FormBuilder){
    this.formUser = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
    });
  }

  get name(){ return this.formUser.get('name') as FormControl; }
  get email(){ return this.formUser.get('email') as FormControl; }
  procesar(){ console.log(this.formUser.value)}


  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required,Validators.email]),
  // });

}
