import { Empaquetador } from './empaquetador';
import { Notificador } from './notificador';

// Facade: una sola operacion coordina sellar, empaquetar y notificar.
export class MesaDePartesFacade {
  private empaquetador = new Empaquetador();
  private notificador = new Notificador();

  enviarAlCongreso(titulo: string, sellada: boolean): boolean {
    if (!sellada) {
      console.log('La propuesta no esta sellada, no se envia');
      return false;
    }
    const expediente = this.empaquetador.empaquetar(titulo);
    this.notificador.notificarComisiones(expediente);
    console.log('Propuesta enviada al Congreso');
    return true;
  }
}
