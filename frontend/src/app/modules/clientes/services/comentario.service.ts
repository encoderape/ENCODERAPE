import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { Comentario } from 'src/app/modules/clientes/models/comentario';
import { HttpClient } from '@angular/common/http';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService extends CrudService<Comentario> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.comentario);
  }

  insert(item: Comentario): void {
    this.create(item).subscribe();
  }

  getComentarios(): Observable<Comentario[]> {
    return this.get();
  }
}
