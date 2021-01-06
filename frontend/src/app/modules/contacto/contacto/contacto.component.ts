import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contacto } from 'src/app/modules/contacto/models/contacto';
import { ContactoService } from 'src/app/modules/contacto/services/contacto.service';
import { ToastService } from 'src/app/modules/shared/services/toast.service';

@Component({
  selector: 'ape-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  contacto: Contacto;

  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.contacto = {
      nombre: null,
      telefono: null,
      correo: null,
      tipo: [''],
      descripcion: null,
      terminos: false,
    };
  }

  ngOnInit(): void {}

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
    this.contactoService.create(this.contacto).subscribe({
      next: (data) => {
        this.toastService.callSuccessfulToast('Formulario enviado con éxito');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      error: (err) => {
        this.toastService.callErrorToast(
          'Error interno del servidor, inténtelo de nuevo por favor, si el problema persiste, ponte en contacto con asistencia al cliente'
        );
      },
    });
  }
}
