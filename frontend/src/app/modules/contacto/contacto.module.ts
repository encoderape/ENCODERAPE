import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ContactoComponent } from 'src/app/modules/contacto/contacto/contacto.component';
import { ContactoRouting } from 'src/app/modules/contacto/contacto.routing';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, FormsModule, SharedModule, ContactoRouting],
  providers: [],
})
export class ContactoModule {}
