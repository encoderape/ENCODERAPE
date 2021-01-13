import { Component, OnInit, Input } from '@angular/core';

import { NosotrosService } from 'src/app/modules/nosotros/services/nosotros.service';

@Component({
  selector: 'ape-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit {
  constructor(private nosotrosService: NosotrosService) {}

  ngOnInit(): void {}
}
