import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Servicios } from 'src/app/modules/servicios/models/servicios';

@Injectable({
    providedIn: 'root',
  })
  export class ServiciosService extends CrudService<Servicios> {
    constructor(http: HttpClient) {
      super(http);
      this.withUrlPrefix(PREFIX.servicios);
    }

    read(): Observable<Servicios[]> {
      return this.get();
    }
  }
