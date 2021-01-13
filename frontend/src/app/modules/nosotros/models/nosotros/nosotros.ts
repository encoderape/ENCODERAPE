import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

import { Habilidades } from './habilidades';
import { Caracteristicas } from './caracteristicas';
import { Trabajadores } from './trabajadores';

export class Nosotros extends BaseDto {
  tituloHabilidades: string;
  habilidades: Habilidades[];
  tituloCaracteristicas: string;
  caracteristicas: Caracteristicas[];
  trabajadores: Trabajadores[];

  constructor(src?: any) {
    super(src);
  }
}
