import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../models/ToDo';
import {TodoService} from '../../services/todo.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Observable<ToDo[]>;


  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo)
      .subscribe(() => this.todos = this.todoService.getTodos());
  }

  addTodo(todo: ToDo) {
    this.todoService.addTodo(todo)
      .subscribe(() => this.todos = this.todoService.getTodos());
  }

  completeTodo(todo: ToDo) {
    this.todoService.toggleCompleted(todo)
      .subscribe(() => this.todos = this.todoService.getTodos());
  }
}
