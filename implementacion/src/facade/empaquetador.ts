// Subsistema: arma el expediente para enviar.
export class Empaquetador {
  empaquetar(titulo: string): string {
    console.log(`Empaquetando expediente de "${titulo}"`);
    return `expediente-${titulo}.zip`;
  }
}
