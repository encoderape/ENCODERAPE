import { Component } from '@angular/core';
import { NuestrosClientesService } from '../services/nuestros-clientes.service';
import { Comentario } from '../models/comentario';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'ape-nuestros-clientes',
  templateUrl: './nuestros-clientes.component.html',
  styleUrls: ['./nuestros-clientes.component.scss'],
  providers: [NuestrosClientesService, ComentarioService],
})
export class NuestrosClientesComponent {
  $testimonios = this.nuestrosClientesService.getClientes();
  $comentarios = this.comentarioService.getComentarios();
  comentario: Comentario;

  constructor(
    private nuestrosClientesService: NuestrosClientesService,
    private comentarioService: ComentarioService
  ) {
    this.comentario = {
      nombreEmpresa: '',
      comentario: '',
    };
  }

  doSubmit(): void {
    this.comentarioService.insert(this.comentario);
  }
}
