import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

const routes: Route [] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'homepage',
    loadChildren: './modules/homepage/homepage.module#HomepageModule'
  },
  {
    path: 'toDo',
    loadChildren: './modules/to-do/to-do.module#ToDoModule'
  },
  {
    path: 'boodschappen',
    loadChildren: './modules/boodschappen/boodschappen.module#BoodschappenModule'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})



export class AppRoutingModule {
}
