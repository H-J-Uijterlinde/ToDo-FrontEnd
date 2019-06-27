import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoodschappenRoutingModule } from './boodschappen-routing.module';
import { BoodschappenComponent } from './boodschappen.component';
import { AddBoodschappenComponent } from './add-boodschappen/add-boodschappen.component';
import { BoodschappenItemComponent } from './boodschappen-item/boodschappen-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [BoodschappenComponent, AddBoodschappenComponent, BoodschappenItemComponent],
  imports: [
    CommonModule,
    BoodschappenRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BoodschappenModule { }
