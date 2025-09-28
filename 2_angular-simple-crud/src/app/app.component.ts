import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: 'John Doe', country: 'USA' },
    { id: 2, name: 'Jane Smith', country: 'Canada' },
    { id: 3, name: 'Mark Johnson', country: 'Australia' }
  ];

  selectedEmployee: Employee = new Employee();
  addOrEdit(){
    if(this.selectedEmployee.id === 0){
    this.selectedEmployee.id = this.employeeArray.length+1;
    this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  deleteEmployee(employee: Employee){
    if(!confirm('Are you sure you want to delete this employee?')) return;
    const index = this.employeeArray.indexOf(employee);
    this.employeeArray.splice(index, 1);
  }
  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }
  // title = 'angular-simple-crud';
}
