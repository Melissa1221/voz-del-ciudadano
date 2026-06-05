import { describe, it, expect } from 'vitest';
import { MesaDePartesFacade } from '../mesaDePartesFacade';

// CP-09: el facade envia al Congreso solo si la propuesta esta sellada.
describe('Facade', () => {
  const mesa = new MesaDePartesFacade();

  it('envia una propuesta sellada', () => {
    expect(mesa.enviarAlCongreso('Ley de transporte', true)).toBe(true);
  });

  it('no envia una propuesta sin sellar', () => {
    expect(mesa.enviarAlCongreso('Ley incompleta', false)).toBe(false);
  });
});
