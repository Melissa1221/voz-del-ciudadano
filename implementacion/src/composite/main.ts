import { Propuesta } from './propuesta';
import { Capitulo } from './capitulo';
import { Articulo } from './articulo';
import { Inciso } from './inciso';
import { Recurso } from './recurso';

// Demo Composite: se arma el arbol de una propuesta y se cuenta todo el arbol.
const propuesta = new Propuesta('Ley de transporte');

const cap1 = new Capitulo('Disposiciones generales');
const art1 = new Articulo('Articulo 1');
art1.agregar(new Inciso('Inciso a'));
art1.agregar(new Inciso('Inciso b'));
cap1.agregar(art1);

propuesta.agregar(cap1);
propuesta.agregar(new Recurso('estudio-tecnico.pdf'));

console.log('Propuesta:', propuesta.titulo());
console.log('Total de elementos en el arbol:', propuesta.contar());
