import { ElementoPropuesta } from './elementoPropuesta';

// Compuesto: un capitulo agrupa articulos.
export class Capitulo implements ElementoPropuesta {
  private hijos: ElementoPropuesta[] = [];

  constructor(private nombre: string) {}

  agregar(hijo: ElementoPropuesta): void {
    this.hijos.push(hijo);
  }

  titulo(): string {
    return this.nombre;
  }

  contar(): number {
    return 1 + this.hijos.reduce((s, h) => s + h.contar(), 0);
  }
}
