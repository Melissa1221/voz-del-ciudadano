import { TipoFirma } from './tipoFirma';

// Devuelve un flyweight compartido por cada combinacion documento+distrito.
export class FabricaTipoFirma {
  private cache = new Map<string, TipoFirma>();

  obtener(documento: string, distrito: string): TipoFirma {
    const clave = `${documento}-${distrito}`;
    let tipo = this.cache.get(clave);
    if (!tipo) {
      tipo = new TipoFirma(documento, distrito);
      this.cache.set(clave, tipo);
    }
    return tipo;
  }

  tamano(): number {
    return this.cache.size;
  }
}
