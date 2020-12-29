import { Injectable } from '@angular/core';
import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiRest: string;

  constructor() {}

  withUrlPrefix(urlPrefix: string): void {
    this.setUrlPrefix(urlPrefix);
  }

  private setUrlPrefix(urlPrefix: string): void {
    this.apiRest = `${BASEURL}/${urlPrefix}`;
  }
}
