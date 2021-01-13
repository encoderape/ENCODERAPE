import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable({
  providedIn: 'root',
})
export class NosotrosService {
  constructor(private crud: CrudService) {
    this.crud.withUrlPrefix(PREFIX.nosotros);
  }
}
