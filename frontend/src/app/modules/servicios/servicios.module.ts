import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRouting } from 'src/app/modules/servicios/servicios.routing';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [CommonModule, ServiciosRouting],
})
export class ServiciosModule {}
