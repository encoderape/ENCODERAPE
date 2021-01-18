import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { NuestrosClientes } from 'src/app/modules/clientes/models/nuestros-clientes';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable({
  providedIn: 'root',
})
export class NuestrosClientesService extends CrudService<NuestrosClientes> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.clientes);
  }

  getClientes(): Observable<NuestrosClientes[]> {
    return this.get();
  }
}
