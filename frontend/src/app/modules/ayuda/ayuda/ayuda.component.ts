import { Component } from '@angular/core';
import { AyudaService } from 'src/app/modules/ayuda/services/ayuda.service';
import { Ayuda } from 'src/app/modules/ayuda/models/ayuda';

@Component({
  selector: 'ape-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss'],
  providers: [AyudaService],
})
export class AyudaComponent {
  $ayudas = this.ayudaService.getAyudas();
  ayuda: Ayuda;

  constructor(public ayudaService: AyudaService) {
    this.ayuda = {
      pregunta: '',
      respuesta: '',
    };
  }

  doSubmit(): void {
    this.ayudaService.insert(this.ayuda);
  }
}
