import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuestrosClientesComponent } from 'src/app/modules/clientes/nuestros-clientes/nuestros-clientes.component';

const routes: Routes = [{ path: '', component: NuestrosClientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRouting {}
