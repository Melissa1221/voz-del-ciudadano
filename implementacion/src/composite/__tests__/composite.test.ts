import { describe, it, expect } from 'vitest';
import { Propuesta } from '../propuesta';
import { Capitulo } from '../capitulo';
import { Articulo } from '../articulo';
import { Inciso } from '../inciso';

// CP-01: contar los elementos de una propuesta con sub-elementos anidados.
describe('Composite', () => {
  it('cuenta todo el arbol de la propuesta', () => {
    const propuesta = new Propuesta('Ley de transporte');
    const capitulo = new Capitulo('Capitulo 1');
    const articulo = new Articulo('Articulo 1');
    articulo.agregar(new Inciso('Inciso a'));
    articulo.agregar(new Inciso('Inciso b'));
    capitulo.agregar(articulo);
    propuesta.agregar(capitulo);

    // propuesta + capitulo + articulo + 2 incisos = 5
    expect(propuesta.contar()).toBe(5);
  });
});
