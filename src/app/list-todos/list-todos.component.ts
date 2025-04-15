import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn React', false, new Date()),
    new Todo(3, 'Learn Vue', false, new Date()),
    new Todo(4, 'Learn JavaScript', false, new Date()),
    new Todo(5, 'Learn TypeScript', false, new Date())
  ];

  constructor() { }

  ngOnInit() {
    // Initialization logic can go here
  }

}
