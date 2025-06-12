import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass, etc.

@Component({
  selector: 'app-login',
  standalone: true, // Mark component as standalone
  imports: [ReactiveFormsModule, CommonModule], // Import necessary modules directly
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialize the login form with username and password fields and validators
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Convenience getter for easy access to form fields
  // This allows accessing form controls like `f['username']` in the template
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('Form is invalid. Please check fields.');
      return;
    }

    this.loading = true;
    console.log('Login form submitted:', this.loginForm.value);
    // Here you would typically call an authentication service
    // For demonstration, we'll just log and simulate success
    setTimeout(() => {
      this.loading = false;
      // In a real app, use a modal or toast for messages instead of alert
      // This is a placeholder for actual login logic
      alert('Login successful!');
      // Navigate to a dashboard or home page after successful login
    }, 1000);
  }
}

