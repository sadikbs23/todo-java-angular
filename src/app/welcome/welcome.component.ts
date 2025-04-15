import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { NgIf } from '@angular/common'; 
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink,NgIf],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to the App!';
  message = 'This is a sample welcome message.';
  name= '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // Initialization logic can go here
    console.log('WelcomeComponent initialized');
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      // You can access route parameters here
      // For example, if you have a parameter named 'name':
      this.name = params['name'];
    });
  }

  // Additional methods can be added here

}
