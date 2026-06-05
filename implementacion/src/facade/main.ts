import { MesaDePartesFacade } from './mesaDePartesFacade';

// Demo Facade: el cliente solo llama enviarAlCongreso, sin tocar subsistemas.
const mesa = new MesaDePartesFacade();

console.log('--- propuesta sellada ---');
mesa.enviarAlCongreso('Ley de transporte', true);

console.log('\n--- propuesta no sellada ---');
mesa.enviarAlCongreso('Ley incompleta', false);
