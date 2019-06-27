import {Component, OnInit} from '@angular/core';
import {Boodschap} from '../../models/Boodschap';
import {BoodschappenService} from '../../services/boodschappen.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-boodschappen',
  templateUrl: './boodschappen.component.html',
  styleUrls: ['./boodschappen.component.css']
})
export class BoodschappenComponent implements OnInit {

  boodschappen: Observable<Boodschap[]>;

  constructor(private boodschapService: BoodschappenService) {
  }

  ngOnInit() {
    this.boodschappen = this.boodschapService.getBoodschappen();
  }

  addBoodschap(boodschap: Boodschap) {
    this.boodschapService.addBoodschappen(boodschap)
      .subscribe(() => this.boodschappen = this.boodschapService.getBoodschappen());
  }

  deleteBoodschap(boodschap: Boodschap) {
    this.boodschapService.deleteBoodschap(boodschap)
      .subscribe(() => this.boodschappen = this.boodschapService.getBoodschappen());
  }

  completeBoodschap(boodschap: Boodschap) {
    this.boodschapService.completeBoodschap(boodschap)
      .subscribe(() => this.boodschappen = this.boodschapService.getBoodschappen());
  }

}
