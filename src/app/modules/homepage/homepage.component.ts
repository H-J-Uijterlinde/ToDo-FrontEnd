import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/todo.service';
import {BoodschappenService} from '../../services/boodschappen.service';
import {ToDo} from '../../models/ToDo';
import {Boodschap} from '../../models/Boodschap';
import {Observable} from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;
  toDoForm: FormGroup;
  boodschapForm: FormGroup;
  toDos: Observable<ToDo[]>;
  boodschappen: Observable<Boodschap[]>;

  constructor(private toDoService: TodoService, private boodschappenService: BoodschappenService) {
  }

  ngOnInit() {
    this.toDoForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
    this.boodschapForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
    this.toDos = this.toDoService.getTodos();
    this.boodschappen = this.boodschappenService.getBoodschappen();
  }

  toDoSubmit(toDo: ToDo) {
    const addTodo = toDo;
    addTodo.completed = false;
    this.toDoService.addTodo(addTodo).subscribe(() => {
        this.toDoForm.reset();
        this.toDos = this.toDoService.getTodos();
      }
    );
  }

  boodschapSubmit(boodschap: Boodschap) {
    const addBoodschap = boodschap;
    addBoodschap.completed = false;
    this.boodschappenService.addBoodschappen(addBoodschap).subscribe(() => {
      this.boodschapForm.reset();
      this.boodschappen = this.boodschappenService.getBoodschappen();
    });
  }

}
