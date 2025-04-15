import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, WelcomeComponent, LoginComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to the App!';
}