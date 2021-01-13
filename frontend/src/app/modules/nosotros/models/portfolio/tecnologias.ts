import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Tecnologias extends BaseDto {
  imagen: string;
  nombre: string;
  progreso: number;

  constructor(src?: any) {
    super(src);
  }
}
