import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosComponent } from 'src/app/modules/servicios/servicios/servicios.component';

const routes: Routes = [{path: '', component: ServiciosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRouting { }
