import { environment } from 'src/environments/environment';
import { IWebApiPrefix } from 'src/app/modules/shared/models/webApiPrefix';
import { LogType } from 'src/app/modules/shared/enums/log-type';

const webApiPrefixes: IWebApiPrefix = {
  catalogo: LogType.CATALOGO,
  contacto: LogType.CONTACTO,
  log: LogType.LOG,
  nosotros: LogType.NOSOTROS,
  portfolio: LogType.PORTFOLIO,
  servicios: LogType.SERVICIOS,
  usuario: LogType.USUARIO,
};

const webApiBaseURL: string = environment.API_URL;

export const BASEURL = webApiBaseURL;
export const PREFIX = webApiPrefixes;
