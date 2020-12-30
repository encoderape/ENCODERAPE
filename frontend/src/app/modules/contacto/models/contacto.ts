export class Contacto {
  nombre: string;
  telefono: number;
  correo: string;
  tipo: string[];
  descripcion: string;
  terminos: boolean;

  constructor(nombre, telefono, correo, tipo, descripcion, terminos) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.terminos = terminos;
  }
}
