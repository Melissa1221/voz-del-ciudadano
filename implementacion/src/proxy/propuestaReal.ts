import { PropuestaFirmable } from './propuestaFirmable';
import { ValidadorFirma } from '../adapter/validadorFirma';

const LIMITE = 25000;
const PLAZO_DIAS = 90;

// Objeto real: lleva el conteo de firmas validas y decide el sellado.
export class PropuestaReal implements PropuestaFirmable {
  private firmantes = new Set<string>();
  private estaSellada = false;

  constructor(private tituloProp: string, private validador: ValidadorFirma) {}

  titulo(): string {
    return this.tituloProp;
  }

  firmar(dni: string, dia: number): void {
    if (dia > PLAZO_DIAS) return;        // fuera de plazo, no cuenta
    if (!this.validador.esValida(dni)) return;
    this.firmantes.add(dni);             // Set ignora duplicados
    if (this.firmantes.size >= LIMITE) {
      this.estaSellada = true;
    }
  }

  firmasValidas(): number {
    return this.firmantes.size;
  }

  sellada(): boolean {
    return this.estaSellada;
  }
}
