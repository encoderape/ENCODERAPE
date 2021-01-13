import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Estudios extends BaseDto {
  fechaFin: Date;
  nombre: string;
  institucion: string;
  aprendizaje: string;
  ciudad: string;

  constructor(src?: any) {
    super(src);
  }
}
