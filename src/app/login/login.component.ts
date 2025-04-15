import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 
  errorMessage: string = 'invalid username or password';
  showError: boolean = false;

  constructor(private router: Router) { } // Inject Router and assign to a private property

  handleLogin() {
    if (this.username === "sadik" && this.password === "sadik") {
      this.router.navigate(['/welcome',this.username]); // Use the injected router instance
      this.showError = false;
    } else {
      this.showError = true;
    }
  }
}