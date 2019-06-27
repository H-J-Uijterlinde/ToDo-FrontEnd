import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToDo} from '../models/ToDo';
import {Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';
import {ToDoResponse} from '../models/ToDoResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = '/api/ToDo';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDoResponse>('/api/ToDo/search/findAllByOrderByCompletedAsc')
      .pipe(
        pluck<any, ToDo[]>('_embedded', 'toDos'),
        );
  }

  toggleCompleted(todo: ToDo): Observable<any> {
    return this.http.put(todo._links.self.href, todo, httpOptions);
  }
  deleteTodo(todo: ToDo): Observable<ToDo> {
    return this.http.delete<ToDo>(todo._links.self.href, httpOptions);
  }

  addTodo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.todosUrl, todo, httpOptions);
  }
}

