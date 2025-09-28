import { Component } from '@angular/core';
import {MessagesService} from '../messages.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-messages',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {
  constructor(public messagesService: MessagesService){}
  message: string = "" ;

  addMessage(){ this.messagesService.add(this.message)}
}
