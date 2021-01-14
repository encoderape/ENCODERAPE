import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoRouting } from 'src/app/modules/contacto/contacto.routing';
import { ContactoComponent } from 'src/app/modules/contacto/contacto/contacto.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRouting, FormsModule, SharedModule],
  providers: [],
})
export class ContactoModule {}
