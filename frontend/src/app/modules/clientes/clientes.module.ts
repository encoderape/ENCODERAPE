import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRouting } from 'src/app/modules/clientes/clientes.routing';
import { NuestrosClientesComponent } from 'src/app/modules/clientes/nuestros-clientes/nuestros-clientes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NuestrosClientesComponent],
  imports: [CommonModule, ClientesRouting, FormsModule],
})
export class ClientesModule {}
