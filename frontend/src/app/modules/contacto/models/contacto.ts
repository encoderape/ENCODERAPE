import { BaseDto } from 'src/app/modules/shared/controls/base-dto';

export class Contacto extends BaseDto {
  nombre: string;
  telefono: number;
  correo: string;
  tipo: string[];
  descripcion: string;
  prioridad: string[];
  terminos: boolean;

  constructor(src?: any) {
    super(src);
  }
}
