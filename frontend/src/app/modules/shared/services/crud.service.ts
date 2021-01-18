import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable()
export class CrudService<T> {
  apiRest: string;

  constructor(private http: HttpClient) {}

  /**
   * Método para definir automáticamente el Endpoint del Servidor
   * @param urlPrefix: string
   * @return void
   */
  withUrlPrefix(urlPrefix: string): void {
    this.setUrlPrefix(urlPrefix);
  }

  /**
   * Método para insertar en la BD
   * @param item: T
   * @return Observable<T>
   */
  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.apiRest}/create`, item);
  }

  /**
   * Método para recoger de la BD
   * @return Observable<T[]>
   */
  get(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiRest}/read`);
  }

  /**
   * Método para recoger por ID de la BD
   * @param itemId: string
   * @return Observable<T>
   */
  getById(itemId: string): Observable<T> {
    return this.http.get<T>(`${this.apiRest}/read/${itemId}`);
  }

  /**
   * Método para actualizar en la BD
   * @param item: T
   * @return Observable<T>
   */
  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.apiRest}/update`, item);
  }

  /**
   * Método para eliminar de la BD
   * @param item: T
   * @return Observable<T>
   */
  delete(item: T): Observable<T> {
    return this.http.delete<T>(`${this.apiRest}/delete`, item);
  }

  /**
   * Método que setea el Endpoint
   * @param urlPrefix: string
   * @return void
   */
  private setUrlPrefix(urlPrefix: string): void {
    this.apiRest = `${BASEURL}/${urlPrefix}`;
  }
}
