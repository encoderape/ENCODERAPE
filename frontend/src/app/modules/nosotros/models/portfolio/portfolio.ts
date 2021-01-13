import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

import { Cursos } from './cursos';
import { Estudios } from './estudios';
import { Idiomas } from './idiomas';
import { Tecnologias } from './tecnologias';
import { Trabajos } from './trabajos';

export class Portfolio extends BaseDto {
  foto: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: number;
  correo: string;
  linkedin: string;
  github: string;
  expliacionPersonal: string;
  trabajos: Trabajos[];
  estudios: Estudios[];
  cursos: Cursos[];
  tecnologias: Tecnologias[];
  idiomas: Idiomas[];
  habilidades: string;

  constructor(src?: any) {
    super(src);
  }
}
