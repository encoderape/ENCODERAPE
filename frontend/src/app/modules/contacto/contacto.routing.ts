import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from 'src/app/modules/contacto/contacto/contacto.component';

const routes: Routes = [
  // Ruta Principal
  { path: '', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoRouting {}
