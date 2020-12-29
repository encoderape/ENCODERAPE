import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRouting } from './shared.routing';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavigatorComponent,
    FooterComponent,
  ],
  exports: [HeaderComponent, NavigatorComponent, FooterComponent],
  imports: [CommonModule, SharedRouting],
})
export class SharedModule {}
