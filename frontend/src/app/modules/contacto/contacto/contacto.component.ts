import { Component, OnInit } from '@angular/core';

import { Contacto } from 'src/app/modules/contacto/models/contacto';
import { ContactoService } from 'src/app/modules/contacto/services/contacto.service';

@Component({
  selector: 'ape-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
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

  ngOnInit(): void {
    document.getElementById('ninguna').addEventListener('click', () => {
      this.contacto.prioridad[0] = 'Ninguna';
      this.contacto.prioridad[1] = '';
      this.contacto.prioridad[2] = '';
    });
    document.getElementById('baja').addEventListener('click', () => {
      this.contacto.prioridad[0] = '';
      this.contacto.prioridad[1] = 'Baja';
      this.contacto.prioridad[2] = '';
    });
    document.getElementById('alta').addEventListener('click', () => {
      this.contacto.prioridad[0] = '';
      this.contacto.prioridad[1] = '';
      this.contacto.prioridad[2] = 'Alta';
    });
  }

  doSubmit(): void {
    if (this.contacto.tipo[0]) {
      this.contacto.tipo[0] = 'Apliación Web';
    }
    if (this.contacto.tipo[1]) {
      this.contacto.tipo[1] = 'Apliación Móvil';
    }
    if (this.contacto.tipo[2]) {
      this.contacto.tipo[2] = 'UX/UI';
    }
    if (this.contacto.tipo[3]) {
      this.contacto.tipo[3] = 'Análisis de Proyectos';
    }
    if (this.contacto.tipo[4]) {
      this.contacto.tipo[4] = 'Consultoria';
    }
    console.log(this.contacto);
    this.contactoService.insert(this.contacto).subscribe();
  }
}
