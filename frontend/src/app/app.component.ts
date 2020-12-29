import { Component } from '@angular/core';
import {CrudService} from './modules/shared/services/crud.service';
import {PREFIX} from './modules/shared/config/webApiPrefix.config';

@Component({
  selector: 'ape-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private crud: CrudService) {
    this.crud.withUrlPrefix(PREFIX.catalogo);
  }
}
