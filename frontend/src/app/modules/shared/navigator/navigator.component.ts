import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ape-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.getElementById('abrir').addEventListener('click', () => {
      document.getElementById('abrir').style.display = 'none';
      document.getElementById('cerrar').style.display = 'flex';
      document.getElementById('servicios').style.display = 'flex';
      document.getElementById('nuestrosClientes').style.display = 'flex';
      document.getElementById('sobreNosotros').style.display = 'flex';
      document.getElementById('contacto').style.display = 'flex';
      document.getElementById('ayuda').style.display = 'flex';
    });

    document.getElementById('cerrar').addEventListener('click', () => {
      document.getElementById('cerrar').style.display = 'none';
      document.getElementById('cerrar').style.display = 'none';
      document.getElementById('servicios').style.display = 'none';
      document.getElementById('nuestrosClientes').style.display = 'none';
      document.getElementById('sobreNosotros').style.display = 'none';
      document.getElementById('contacto').style.display = 'none';
      document.getElementById('ayuda').style.display = 'none';
      document.getElementById('abrir').style.display = 'flex';
    });
  }
}
