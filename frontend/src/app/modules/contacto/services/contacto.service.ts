import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Contacto } from 'src/app/modules/contacto/models/contacto';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private crud: CrudService) {
    this.crud.withUrlPrefix(PREFIX.contacto);
  }

  create(item: Contacto): Observable<object> {
    return this.crud.create(item);
  }
}
