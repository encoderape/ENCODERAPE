import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Portfolio } from 'src/app/modules/nosotros/models/portfolio/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService extends CrudService<Portfolio> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.portfolio);
  }

  read(): Observable<Portfolio[]> {
    return this.get();
  }
}
