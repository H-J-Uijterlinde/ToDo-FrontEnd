import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../../../models/ToDo";
import {TodoService} from "../../../services/todo.service";
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() deleteTodo: EventEmitter<ToDo> = new EventEmitter();
  @Output() completeTodo: EventEmitter<ToDo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setClasses() {
    return {
      todo: true,
      'is-complete': this.todo.completed
    };
  }

  onToggle(todo: ToDo) {
    todo.completed = !todo.completed;
    this.completeTodo.emit(todo);
  }

  onDelete(todo: ToDo) {
    this.deleteTodo.emit(todo);
  }
}
