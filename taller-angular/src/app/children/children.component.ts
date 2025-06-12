import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './children.component.html',
  styleUrl: './children.component.css',
})
export class ChildrenComponent {
  @Input() title?: string;

  @Output() titleChange = new EventEmitter<string>();
  emitTitleChange() {
    this.titleChange.emit(this.title);
  }
}
