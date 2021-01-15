import { Habilidades } from 'src/app/modules/nosotros/models/nosotros/habilidades';
import { Caracteristicas } from 'src/app/modules/nosotros/models/nosotros/caracteristicas';
import { Trabajadores } from 'src/app/modules/nosotros/models/nosotros/trabajadores';

export type Nosotros = {
  habilidades: Habilidades[];
  caracteristicas: Caracteristicas[];
  trabajadores: Trabajadores[];
};
