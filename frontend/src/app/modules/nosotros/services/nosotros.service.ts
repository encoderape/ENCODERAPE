import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Nosotros } from 'src/app/modules/nosotros/models/nosotros/nosotros';

@Injectable({
  providedIn: 'root',
})
export class NosotrosService extends CrudService<Nosotros> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.nosotros);
  }
}
