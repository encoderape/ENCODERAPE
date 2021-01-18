export enum MessageType {
  BAD_REQUEST = 'La URL a la que se ha intentado hacer la petición está mal.',
  NOT_FOUND = 'Se ha intentado buscar algo que no existe.',
  SERVER_ERROR = 'Ha habido un error interno del servidor.',
  OK = 'Datos obtenidos correctamente.',
  CREATED = 'Datos insertados correctamente.',
  UNAUTHORIZED = 'No tienes acceso a este contenido.',
}
