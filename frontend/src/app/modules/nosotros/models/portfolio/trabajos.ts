import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Trabajos extends BaseDto {
  fechaInicio: Date;
  fechaFin: Date;
  empresa: string;
  rango: string;
  tareasRealizadas: string;

  constructor(src?: any) {
    super(src);
  }
}
