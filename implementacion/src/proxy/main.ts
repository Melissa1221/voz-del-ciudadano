import { PropuestaReal } from './propuestaReal';
import { PropuestaSelladaProxy } from './propuestaSelladaProxy';
import { ValidadorFirmaAdapter } from '../adapter/validadorFirmaAdapter';
import { ServicioExterno } from '../adapter/servicioExterno';

// Demo Proxy: al llegar al limite la propuesta se sella y el proxy bloquea cambios.
const real = new PropuestaReal('Ley de transporte', new ValidadorFirmaAdapter(new ServicioExterno()));
const propuesta = new PropuestaSelladaProxy(real);

// 25000 firmas validas dentro del plazo (dni de 8 digitos distintos).
for (let i = 0; i < 25000; i++) {
  propuesta.firmar(String(10000000 + i), 1);
}

console.log('Firmas validas:', propuesta.firmasValidas());
console.log('Sellada:', propuesta.sellada());
console.log('Hash del sellado:', propuesta.hashSellado());

try {
  propuesta.firmar('99999999', 1);
} catch (e) {
  console.log('Bloqueo del proxy:', (e as Error).message);
}
