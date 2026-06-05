import { describe, it, expect } from 'vitest';
import { PropuestaReal } from '../propuestaReal';
import { PropuestaSelladaProxy } from '../propuestaSelladaProxy';
import { ValidadorFirma } from '../../adapter/validadorFirma';

// Validador que acepta todo, para controlar el conteo en los tests.
const aceptaTodo: ValidadorFirma = { esValida: () => true };

function firmar(p: PropuestaSelladaProxy, cantidad: number, dia: number): void {
  for (let i = 0; i < cantidad; i++) {
    p.firmar(String(10000000 + i), dia);
  }
}

describe('Proxy', () => {
  // CP-06: umbral exacto de sellado.
  it('no sella con 24999 y sella con 25000', () => {
    const p = new PropuestaSelladaProxy(new PropuestaReal('Ley de transporte', aceptaTodo));
    firmar(p, 24999, 1);
    expect(p.sellada()).toBe(false);
    p.firmar('20000000', 1);
    expect(p.sellada()).toBe(true);
  });

  // CP-07: plazo vencido.
  it('no sella si las firmas llegan despues de los 90 dias', () => {
    const p = new PropuestaSelladaProxy(new PropuestaReal('Ley de transporte', aceptaTodo));
    firmar(p, 25000, 91);
    expect(p.firmasValidas()).toBe(0);
    expect(p.sellada()).toBe(false);
  });

  // CP-04: firma duplicada del mismo ciudadano no se cuenta dos veces.
  it('no cuenta una firma duplicada', () => {
    const p = new PropuestaSelladaProxy(new PropuestaReal('Ley de transporte', aceptaTodo));
    p.firmar('12345678', 1);
    p.firmar('12345678', 1);
    expect(p.firmasValidas()).toBe(1);
  });

  // CP-08: propuesta sellada bloquea cambios.
  it('rechaza firmar una propuesta ya sellada', () => {
    const p = new PropuestaSelladaProxy(new PropuestaReal('Ley de transporte', aceptaTodo));
    firmar(p, 25000, 1);
    expect(() => p.firmar('99999999', 1)).toThrow();
  });
});
