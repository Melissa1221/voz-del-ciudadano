import { ElementoPropuesta } from './elementoPropuesta';

// Hoja: material de soporte (documento, video, comentario).
export class Recurso implements ElementoPropuesta {
  constructor(private nombre: string) {}

  titulo(): string {
    return this.nombre;
  }

  contar(): number {
    return 1;
  }
}
