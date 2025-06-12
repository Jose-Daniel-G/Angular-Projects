import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  text_color:string ='';
  button_disabled:boolean = true;
  enable(){
    this.button_disabled = this.button_disabled ? false:true;
  }
  src = 'https://github.com/Jose-Daniel-G.png';
}
