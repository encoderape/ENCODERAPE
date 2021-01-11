import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

import { Portfolio } from 'src/app/modules/nosotros/models/portfolio';
import { NosotrosService } from 'src/app/modules/nosotros/services/nosotros.service';

@Component({
  selector: 'ape-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit {
  portfolio: Portfolio[];

  constructor(
    private nosotrosService: NosotrosService,
  ) {}

  ngOnInit(): void {
    // this.recogerPortfolios();
  }

  /*private recogerPortfolios(){
    this.nosotrosService.get().subscribe({
      next: (data) => {
      },
    });
  }*/

}

