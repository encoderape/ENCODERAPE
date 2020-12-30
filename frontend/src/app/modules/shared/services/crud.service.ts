import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiRest: string;

  constructor(private http: HttpClient) {}

  withUrlPrefix(urlPrefix: string): void {
    this.setUrlPrefix(urlPrefix);
  }

  create(item: object): Observable<object> {
    return this.http.post(`${this.apiRest}/create`, item);
  }

  get(): Observable<object> {
    return this.http.get(`${this.apiRest}/read`);
  }

  getById(itemId: string): Observable<object> {
    return this.http.get(`${this.apiRest}/read/${itemId}`);
  }

  update(item: object): Observable<object> {
    return this.http.put(`${this.apiRest}/update`, item);
  }

  delete(item: object): Observable<object> {
    return this.http.delete(`${this.apiRest}/delete`, item);
  }

  private setUrlPrefix(urlPrefix: string): void {
    this.apiRest = `${BASEURL}/${urlPrefix}`;
  }
}
