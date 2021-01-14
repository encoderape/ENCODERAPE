import { Component, OnInit } from '@angular/core';

import { ServiciosService } from 'src/app/modules/servicios/services/servicios.sevice';

@Component({
  selector: 'ape-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    this.leerServicios();
  }

  private leerServicios(): void {
    console.log(this.serviciosService.read().subscribe());
  }
}
