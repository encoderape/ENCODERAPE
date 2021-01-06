import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRouting } from 'src/app/modules/nosotros/nosotros.routing';
import { NosotrosComponent } from 'src/app/modules/nosotros/nosotros/nosotros.component';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [CommonModule, NosotrosRouting],
})
export class NosotrosModule {}
