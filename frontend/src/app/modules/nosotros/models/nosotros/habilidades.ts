import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Habilidades extends BaseDto {
  icono: string;
  titulo: string;
  texto: string;

  constructor(src?: any) {
    super(src);
  }
}