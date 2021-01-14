import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable()
export class CrudService<T> {
  apiRest: string;

  constructor(private http: HttpClient) {}

  withUrlPrefix(urlPrefix: string): void {
    this.setUrlPrefix(urlPrefix);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.apiRest}/create`, item);
  }

  get(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiRest}/read`);
  }

  getById(itemId: string): Observable<T> {
    return this.http.get<T>(`${this.apiRest}/read/${itemId}`);
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.apiRest}/update`, item);
  }

  delete(item: T): Observable<T> {
    return this.http.delete<T>(`${this.apiRest}/delete`, item);
  }

  private setUrlPrefix(urlPrefix: string): void {
    this.apiRest = `${BASEURL}/${urlPrefix}`;
  }
}
