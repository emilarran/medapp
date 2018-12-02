import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiseasesComponent } from './diseases/diseases.component';
import { MedicinesComponent } from './medicines/medicines.component';

const routes: Routes = [
  { path: 'diseases', component: DiseasesComponent },
  { path: 'medicines', component: MedicinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
