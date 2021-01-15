import { Component } from '@angular/core';
import { Contacto } from 'src/app/modules/contacto/models/contacto';
import { ContactoService } from 'src/app/modules/contacto/services/contacto.service';
import { CheckboxType } from 'src/app/modules/contacto/enums/checkbox-type';
import { RadiobuttonType } from 'src/app/modules/contacto/enums/radiobutton-type';

@Component({
  selector: 'ape-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [ContactoService],
})
export class ContactoComponent {
  contacto: Contacto;

  constructor(private contactoService: ContactoService) {
    this.contacto = {
      nombre: null,
      telefono: null,
      correo: null,
      tipo: ['', '', '', '', ''],
      descripcion: null,
      prioridad: ['', '', ''],
      terminos: false,
    };
  }

  doSubmit(): void {
    this.changeCheckboxValue();
    this.changeRadiobuttonValue();
    this.contactoService.insert(this.contacto);
  }

  private changeCheckboxValue(): void {
    if (this.contacto.tipo[0]) {
      this.contacto.tipo[0] = CheckboxType.Web;
    }
    if (this.contacto.tipo[1]) {
      this.contacto.tipo[1] = CheckboxType.Movil;
    }
    if (this.contacto.tipo[2]) {
      this.contacto.tipo[2] = CheckboxType.Design;
    }
    if (this.contacto.tipo[3]) {
      this.contacto.tipo[3] = CheckboxType.Analysis;
    }
    if (this.contacto.tipo[4]) {
      this.contacto.tipo[4] = CheckboxType.Consulting;
    }
  }

  private changeRadiobuttonValue(): void {
    if (this.contacto.prioridad[0] === undefined) {
      this.contacto.prioridad[0] = RadiobuttonType.Ninguna;
      this.contacto.prioridad[1] = RadiobuttonType.Vacio;
      this.contacto.prioridad[2] = RadiobuttonType.Vacio;
    }
    if (this.contacto.prioridad[1] === undefined) {
      this.contacto.prioridad[0] = RadiobuttonType.Vacio;
      this.contacto.prioridad[1] = RadiobuttonType.Baja;
      this.contacto.prioridad[2] = RadiobuttonType.Vacio;
    }
    if (this.contacto.prioridad[2] === undefined) {
      this.contacto.prioridad[0] = RadiobuttonType.Vacio;
      this.contacto.prioridad[1] = RadiobuttonType.Vacio;
      this.contacto.prioridad[2] = RadiobuttonType.Alta;
    }
  }
}
