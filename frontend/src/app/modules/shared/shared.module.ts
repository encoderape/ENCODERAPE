import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRouting } from './shared.routing';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedRouting
  ]
})
export class SharedModule { }
