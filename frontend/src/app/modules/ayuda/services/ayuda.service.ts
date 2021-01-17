import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Ayuda } from 'src/app/modules/ayuda/models/ayuda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AyudaService extends CrudService<Ayuda> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.ayuda);
  }

  insert(item: Ayuda): void {
    this.create(item).subscribe();
  }

  getAyudas(): Observable<Ayuda[]> {
    return this.get();
  }
}
