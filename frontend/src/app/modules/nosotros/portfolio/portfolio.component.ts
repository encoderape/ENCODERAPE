import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/modules/nosotros/services/portfolio.service';

@Component({
  selector: 'ape-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
