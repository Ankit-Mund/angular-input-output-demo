import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  @Input() 
  todos: Object;
  @Output()
  delete: EventEmitter<Object> = new EventEmitter<Number>();
  deleteTodo(todo){
    this.delete.emit(todo)
  }
  constructor() { }

  ngOnInit() {
  }

}
