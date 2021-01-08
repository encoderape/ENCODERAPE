export class Contacto {
  nombre: string;
  telefono: number;
  correo: string;
  tipo: string[];
  descripcion: string;
  prioridad: string[];
  terminos: boolean;

  constructor(
    nombre,
    telefono,
    correo,
    tipo,
    descripcion,
    prioridad,
    terminos
  ) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.prioridad = prioridad;
    this.terminos = terminos;
  }
}
