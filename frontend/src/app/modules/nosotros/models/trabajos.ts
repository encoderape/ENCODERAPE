export class Trabajos {
  fechaInicio: Date;
  fechaFin: Date;
  empresa: string;
  rango: string;
  tareasRealizadas: string;

  constructor(fechaInicio, fechaFin, empresa, rango, tareasRealizadas) {
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.empresa = empresa;
    this.rango = rango;
    this.tareasRealizadas = tareasRealizadas;
  }
}
