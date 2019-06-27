import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoodschappenComponent} from './boodschappen.component';

const routes: Routes = [
  {
    path: '',
    component: BoodschappenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoodschappenRoutingModule { }
