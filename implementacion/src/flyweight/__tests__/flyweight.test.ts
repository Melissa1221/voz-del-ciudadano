import { describe, it, expect } from 'vitest';
import { FabricaTipoFirma } from '../fabricaTipoFirma';

// CP-05: dos firmas del mismo tipo comparten la misma instancia.
describe('Flyweight', () => {
  it('reutiliza el flyweight para el mismo tipo', () => {
    const fabrica = new FabricaTipoFirma();
    const a = fabrica.obtener('DNI', 'Lima');
    const b = fabrica.obtener('DNI', 'Lima');

    expect(a).toBe(b);
    expect(fabrica.tamano()).toBe(1);
  });
});
