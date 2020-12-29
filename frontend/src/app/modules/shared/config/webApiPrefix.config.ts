import { IWebApiPrefix } from 'src/app/modules/shared/interfaces/webApiPrefix.interface';
import { environment } from 'src/environments/environment';

const webApiPrefixes: IWebApiPrefix = {
  catalogo: 'catalogo',
  contacto: 'contacto',
  usuario: 'usuario',
  portfolio: 'portfolio',
};

const webApiBaseURL: string = environment.API_URL;

export const BASEURL = webApiBaseURL;
export const PREFIX = webApiPrefixes;
