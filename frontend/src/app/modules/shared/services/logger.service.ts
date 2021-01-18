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
  /**
   * Método para crear un console.log personalizado de tipo Success
   * @param item: Log
   * @return void
   */
  private static successLog(item: Log): void {
    const STYLE = StyleType.SUCCESS;
    console.log(`%cCÓDIGO: ${item.code} - ${item.error}`, STYLE);
  }

  /**
   * Método para crear un console.log personalizado de tipo Error
   * @param item: Log
   * @return void
   */
  private static errorLog(item: Log): void {
    const STYLE = StyleType.ERROR;
    console.log(`%cCÓDIGO: ${item.code} - ${item.error}`, STYLE);
  }

  /**
   * Método para crear un console.log personalizado de tipo Warning
   * @param item: Log
   * @return void
   */
  private static warningLog(item: Log): void {
    const STYLE = StyleType.WARNING;
    console.log(`%cCÓDIGO: ${item.code} - ${item.error}`, STYLE);
  }

  constructor(http: HttpClient) {
    super(http);
    this.withUrlPrefix(PREFIX.log);
  }

  /**
   * Método para insertar Logs en la BD
   * @param item: Log
   * @return void
   */
  insert(item: Log): void {
    this.create(item).subscribe();
  }

  /**
   * Método para insertar console.log de los Logs en la BD
   * @param item: Log
   * @param type: string
   * @return void
   */
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
