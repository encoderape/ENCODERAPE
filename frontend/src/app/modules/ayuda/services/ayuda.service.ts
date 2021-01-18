import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Ayuda } from 'src/app/modules/ayuda/models/ayuda';

@Injectable({
  providedIn: 'root',
})
export class AyudaService extends CrudService<Ayuda> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.ayuda);
  }

  /**
   * Método para insertar una Ayuda en la BD
   * @param item: Contacto
   * @return void
   */
  insert(item: Ayuda): void {
    this.create(item).subscribe();
  }

  /**
   * Método para recoger las ayudas de la BD
   * @return Observable<Ayuda[]>
   */
  getAyudas(): Observable<Ayuda[]> {
    return this.get();
  }
}
