import { createHash } from 'node:crypto';
import { PropuestaFirmable } from './propuestaFirmable';
import { PropuestaReal } from './propuestaReal';

// Proxy de proteccion: bloquea escrituras cuando la propuesta esta sellada.
export class PropuestaSelladaProxy implements PropuestaFirmable {
  private hash: string | null = null;

  constructor(private real: PropuestaReal) {}

  firmar(dni: string, dia: number): void {
    if (this.real.sellada()) {
      throw new Error('Propuesta sellada: no admite cambios');
    }
    this.real.firmar(dni, dia);
    if (this.real.sellada()) {
      this.hash = this.sellar();
    }
  }

  firmasValidas(): number {
    return this.real.firmasValidas();
  }

  sellada(): boolean {
    return this.real.sellada();
  }

  hashSellado(): string | null {
    return this.hash;
  }

  private sellar(): string {
    const contenido = `${this.real.titulo()}:${this.real.firmasValidas()}`;
    return createHash('sha256').update(contenido).digest('hex');
  }
}
