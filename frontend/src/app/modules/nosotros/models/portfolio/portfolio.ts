import { Cursos } from 'src/app/modules/nosotros/models/portfolio/cursos';
import { Estudios } from 'src/app/modules/nosotros/models/portfolio/estudios';
import { Idiomas } from 'src/app/modules/nosotros/models/portfolio/idiomas';
import { Tecnologias } from 'src/app/modules/nosotros/models/portfolio/tecnologias';
import { Trabajos } from 'src/app/modules/nosotros/models/portfolio/trabajos';

export type Portfolio = {
  telefono: number;
  correo: string;
  linkedin: string;
  github: string;
  presentacion: string;
  trabajos: Trabajos[];
  estudios: Estudios[];
  cursos: Cursos[];
  tecnologias: Tecnologias[];
  idiomas: Idiomas[];
  habilidades: string;
};
