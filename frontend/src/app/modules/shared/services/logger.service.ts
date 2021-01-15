import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { Log } from 'src/app/modules/shared/models/log';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { CodeType } from 'src/app/modules/shared/enums/code-type';
import { StyleType } from 'src/app/modules/shared/enums/style-type';

@Injectable({
  providedIn: 'root',
})
export class LoggerService extends CrudService<Log> {
  private static successLog(item: Log): void {
    const STYLE = StyleType.SUCCESS;
    console.log(`%cCÓDIGO: ${item.code} - ${item.error}`, STYLE);
  }

  private static errorLog(item: Log): void {
    const STYLE = StyleType.ERROR;
    console.log(`%cCÓDIGO: ${item.code} - ${item.error}`, STYLE);
  }

  private static warningLog(item: Log): void {
    const STYLE = StyleType.WARNING;
    console.log(`%cCÓDIGO: ${item.code} - ${item.error}`, STYLE);
  }

  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.log);
  }

  insert(item: Log): void {
    this.create(item).subscribe();
  }

  console(item: Log, type: string): void {
    if (type === CodeType.ERROR) {
      LoggerService.errorLog(item);
    }
    if (type === CodeType.SUCCESS) {
      LoggerService.successLog(item);
    }
    if (type === CodeType.WARNING) {
      LoggerService.warningLog(item);
    }
  }
}
