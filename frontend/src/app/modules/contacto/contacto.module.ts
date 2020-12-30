import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRouting } from './contacto.routing';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRouting],
})
export class ContactoModule {}
