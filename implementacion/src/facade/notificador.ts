// Subsistema: avisa a las comisiones del Congreso.
export class Notificador {
  notificarComisiones(expediente: string): void {
    console.log(`Notificando a las comisiones con ${expediente}`);
  }
}
