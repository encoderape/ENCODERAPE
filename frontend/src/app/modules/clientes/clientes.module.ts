import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRouting } from 'src/app/modules/clientes/clientes.routing';
// import { NuestrosClientesComponent } from 'src/app/modules/clientes/nuestros-clientes/nuestros-clientes.component';

@NgModule({
  declarations: [/*NuestrosClientesComponent*/],
  imports: [CommonModule, ClientesRouting],
})
export class ClientesModule {}
