// Flyweight: datos intrinsecos que comparten muchas firmas.
export class TipoFirma {
  constructor(
    readonly documento: string,
    readonly distrito: string,
  ) {}

  // Lo extrinseco (dni, fecha) llega por parametro, no se guarda.
  describir(dni: string): string {
    return `${dni} | ${this.documento} | ${this.distrito}`;
  }
}
