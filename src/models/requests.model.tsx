export interface IRequestsResponseItem {
  id: number;
  description: string;
  idRequestingUser: number;
  idReceivingUser: number;
  userNameReceiving: string;
  userNameRequesting: string;
}

export interface IRequestsResponse {
  message: string;
  details: {
    text: string;
  };
  data: {
    response: IRequestsResponseItem[];
  };
}

export interface IUserMetrics {
  idUsuario: number;
  nombreUsuario: string;
  solicitudes: ISolicitudes;
}

export interface ISolicitudes {
  ultimaAceptada: string;
  ultimaPendiente: string;
  ultimaCancelada: string;
  ultimoEnviado: string;
  conteoConexiones: number;
  conteoAceptadas: number;
  conteoPendientes: number;
  conteoCanceladas: number;
  conteoEnviadas: number;
}