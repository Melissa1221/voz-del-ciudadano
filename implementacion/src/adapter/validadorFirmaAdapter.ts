import { ValidadorFirma } from './validadorFirma';
import { ServicioExterno } from './servicioExterno';

// Adapta el servicio externo a la interfaz ValidadorFirma del sistema.
export class ValidadorFirmaAdapter implements ValidadorFirma {
  constructor(private externo: ServicioExterno) {}

  esValida(dni: string): boolean {
    return this.externo.verificarDocumento(dni).ok;
  }
}
