import { FabricaTipoFirma } from './fabricaTipoFirma';

// Demo Flyweight: muchas firmas del mismo tipo comparten una sola instancia.
const fabrica = new FabricaTipoFirma();

const t1 = fabrica.obtener('DNI', 'Lima');
const t2 = fabrica.obtener('DNI', 'Lima');
const t3 = fabrica.obtener('DNI', 'Cusco');

console.log('t1 y t2 son la misma instancia:', t1 === t2);
console.log('Flyweights creados:', fabrica.tamano());
console.log(t1.describir('12345678'));
