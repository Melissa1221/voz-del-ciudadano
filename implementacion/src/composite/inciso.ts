import { ElementoPropuesta } from './elementoPropuesta';

// Hoja: no tiene sub-elementos.
export class Inciso implements ElementoPropuesta {
  constructor(private texto: string) {}

  titulo(): string {
    return this.texto;
  }

  contar(): number {
    return 1;
  }
}
