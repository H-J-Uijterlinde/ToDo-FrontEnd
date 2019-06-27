import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToDoRoutingModule} from './to-do-routing.module';
import {TodosComponent} from './todos.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ToDoModule {
}
