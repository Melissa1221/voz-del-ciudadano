import { ElementoPropuesta } from './elementoPropuesta';

// Compuesto: un articulo agrupa incisos.
export class Articulo implements ElementoPropuesta {
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
