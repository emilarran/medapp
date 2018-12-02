import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiseasesComponent } from './diseases/diseases.component';

const routes: Routes = [
  { path: 'diseases', component: DiseasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
