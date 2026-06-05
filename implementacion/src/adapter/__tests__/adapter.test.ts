import { describe, it, expect } from 'vitest';
import { ServicioExterno } from '../servicioExterno';
import { ValidadorFirmaAdapter } from '../validadorFirmaAdapter';

// CP-02 y CP-03: firma valida e invalida a traves del Adapter.
describe('Adapter', () => {
  const validador = new ValidadorFirmaAdapter(new ServicioExterno());

  it('acepta una firma valida', () => {
    expect(validador.esValida('12345678')).toBe(true);
  });

  it('rechaza una firma invalida', () => {
    expect(validador.esValida('999')).toBe(false);
  });
});
