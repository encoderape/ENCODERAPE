import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contacto } from 'src/app/modules/contacto/models/contacto';
import { ContactoService } from 'src/app/modules/contacto/services/contacto.service';

@Component({
  selector: 'ape-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  contacto: Contacto;

  constructor(
    private contactoService: ContactoService,
    private router: Router
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
    this.contactoService.create(this.contacto).subscribe({
      next: (data) => {
        console.log(data);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
