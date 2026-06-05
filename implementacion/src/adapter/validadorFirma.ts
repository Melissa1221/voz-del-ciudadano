// Interfaz que el sistema espera para validar una firma.
export interface ValidadorFirma {
  esValida(dni: string): boolean;
}
