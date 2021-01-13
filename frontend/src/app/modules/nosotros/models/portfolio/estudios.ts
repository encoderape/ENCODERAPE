export class Estudios {
  fechaFin: Date;
  nombre: string;
  institucion: string;
  aprendizaje: string;
  ciudad: string;

  constructor(fechaFIn, nombre, institucion, aprendizaje, ciudad) {
    this.fechaFin = fechaFIn;
    this.nombre = nombre;
    this.institucion = institucion;
    this.aprendizaje = aprendizaje;
    this.ciudad = ciudad;
  }
}
