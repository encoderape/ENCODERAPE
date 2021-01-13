import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Idiomas extends BaseDto {
  idioma: string;
  nivel: string;

  constructor(src?: any) {
    super(src);
  }
}
