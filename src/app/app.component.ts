import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  todos = [
    {
      label: 'Bring Milk',
      done: false,
      priority: 3
    },
    {
      label: 'Learn Angular',
      done: false,
      priority: 2
    },
    {
      label: 'Ember??',
      done: true,
      priority: 1
    },
    {
      label: 'Book Cab',
      done: false,
      priority: 4
    }
  ];
  addTodo(newTodoLabel){
    let newTodo = {
      label: newTodoLabel,
      done: false,
      priority: 1
    }
    this.todos.push(newTodo)
  }

  deleteTodo($event){
    this.todos = this.todos.filter(e => e!= $event)
  }
}
