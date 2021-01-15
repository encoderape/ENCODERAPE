import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { Log } from 'src/app/modules/shared/models/log';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable({
  providedIn: 'root',
})
export class LoggerService extends CrudService<Log> {
  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.log);
  }

  insert(item: Log): void {
    this.create(item).subscribe();
  }

  console(item: Log): void {
    console.error(item);
  }
}
