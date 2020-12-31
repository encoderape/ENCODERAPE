import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactoRouting } from './contacto.routing';

import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRouting, FormsModule],
})
export class ContactoModule {}
