import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactoRouting } from './contacto.routing';

import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRouting, FormsModule, SharedModule],
})
export class ContactoModule {}
