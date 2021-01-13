import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRouting } from 'src/app/modules/nosotros/nosotros.routing';
import { NosotrosComponent } from 'src/app/modules/nosotros/nosotros/nosotros.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [NosotrosComponent, PortfolioComponent],
  imports: [CommonModule, NosotrosRouting],
})
export class NosotrosModule {}
