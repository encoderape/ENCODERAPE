import { Steps } from 'src/app/modules/servicios/models/steps';
import { Tecnologias } from 'src/app/modules/servicios/models/tecnologias';
import { NuestrosServicios } from 'src/app/modules/servicios/models/nuestrosServicios';

export type Servicios = {
  steps: Steps[];
  tecnologias: Tecnologias[];
  nuestrosServicios: NuestrosServicios[];
};
