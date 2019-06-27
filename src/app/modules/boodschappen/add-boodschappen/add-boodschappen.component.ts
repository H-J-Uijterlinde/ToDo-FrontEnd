import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BoodschappenService} from "../../../services/boodschappen.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Boodschap} from "../../../models/Boodschap";

@Component({
  selector: 'app-add-boodschappen',
  templateUrl: './add-boodschappen.component.html',
  styleUrls: ['./add-boodschappen.component.css']
})
export class AddBoodschappenComponent implements OnInit {

  @Output() addBoodschap: EventEmitter<any> = new EventEmitter();
  boodschapForm: FormGroup;
  boodschap: Boodschap;

  constructor() {
  }

  ngOnInit() {
    this.boodschapForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  onSubmit(boodschap: Boodschap) {
    this.boodschap = boodschap;
    this.boodschap.completed = false;
    this.addBoodschap.emit(this.boodschap);
    this.boodschapForm.reset();
  }
}
