import { ServicioExterno } from './servicioExterno';
import { ValidadorFirmaAdapter } from './validadorFirmaAdapter';

// Demo Adapter: el sistema usa ValidadorFirma sin conocer el servicio externo.
const validador = new ValidadorFirmaAdapter(new ServicioExterno());

console.log('Firma 12345678 valida:', validador.esValida('12345678'));
console.log('Firma 999 valida:', validador.esValida('999'));
