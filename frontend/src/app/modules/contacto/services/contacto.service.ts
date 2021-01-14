import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Contacto } from 'src/app/modules/contacto/models/contacto';

@Injectable({
  providedIn: 'root',
})
export class ContactoService extends CrudService<Contacto> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.contacto);
  }

  insert(item: Contacto): void {
    this.create(item).subscribe();
  }
}
