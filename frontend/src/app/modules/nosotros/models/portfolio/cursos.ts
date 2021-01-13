import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Cursos extends BaseDto {
  fechaFin: Date;
  nombre: string;
  aprendizaje: string;

  constructor(src?: any) {
    super(src);
  }
}
