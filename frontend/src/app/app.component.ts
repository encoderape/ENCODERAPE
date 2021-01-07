import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/modules/shared/services/title.service';

@Component({
  selector: 'ape-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.initializeTitleService();
  }

  onActivate(): void {
    window.scroll(0, 0);
  }
}
