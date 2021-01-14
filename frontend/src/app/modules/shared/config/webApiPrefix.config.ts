import { environment } from 'src/environments/environment';
import { IWebApiPrefix } from 'src/app/modules/shared/interfaces/webApiPrefix.interface';

const webApiPrefixes: IWebApiPrefix = {
  catalogo: 'catalogo',
  contacto: 'contacto',
  usuario: 'usuario',
  nosotros: 'nosotros',
  portfolio: 'portfolio',
  servicios: 'servicios',
};

const webApiBaseURL: string = environment.API_URL;

export const BASEURL = webApiBaseURL;
export const PREFIX = webApiPrefixes;
