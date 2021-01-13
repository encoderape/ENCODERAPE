import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';
import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

@Injectable()
export class CrudService<TDto extends BaseDto> {
  apiRest: string;

  constructor(private http: HttpClient) {}

  withCasting(castToDtoFnc: (x: TDto) => TDto): CrudService<TDto> {
    this.castToDto = castToDtoFnc;
    return this;
  }

  withUrlPrefix(urlPrefix: string): void {
    this.setUrlPrefix(urlPrefix);
  }

  create(item: TDto): Observable<TDto> {
    // @ts-ignore
    return this.http.post(`${this.apiRest}/create`, item);
  }

  get(): Observable<TDto[]> {
    // @ts-ignore
    return this.http.get(`${this.apiRest}/read`);
  }

  getById(itemId: string): Observable<TDto> {
    // @ts-ignore
    return this.http.get(`${this.apiRest}/read/${itemId}`);
  }

  update(item: TDto): Observable<TDto> {
    // @ts-ignore
    return this.http.put(`${this.apiRest}/update`, item);
  }

  delete(item: TDto): Observable<TDto> {
    // @ts-ignore
    return this.http.delete(`${this.apiRest}/delete`, item);
  }

  private setUrlPrefix(urlPrefix: string): void {
    this.apiRest = `${BASEURL}/${urlPrefix}`;
  }

  private castToDto(x: TDto): TDto {
    return x;
  }
}
