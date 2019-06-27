import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Boodschap} from '../../../models/Boodschap';
import {ToDo} from "../../../models/ToDo";

@Component({
  selector: 'app-boodschappen-item',
  templateUrl: './boodschappen-item.component.html',
  styleUrls: ['./boodschappen-item.component.css']
})
export class BoodschappenItemComponent implements OnInit {
  @Input()
  boodschap: Boodschap;

  @Output() deleteBoodschap: EventEmitter<Boodschap> = new EventEmitter();
  @Output() completeBoodschap: EventEmitter<Boodschap> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onToggle(boodschap: Boodschap) {
    boodschap.completed = !boodschap.completed;
    this.completeBoodschap.emit(boodschap);
  }

  onDelete(boodschap: Boodschap) {
    this.deleteBoodschap.emit(boodschap);

  }

  setClasses() {
    return {
      boodschap: true,
      'is-complete': this.boodschap.completed
    };
  }
}
