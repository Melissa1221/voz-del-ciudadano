# Casos de uso — Voz del Ciudadano

Tres casos de uso que cubren los requisitos del SRS. Cada uno indica los requisitos que toca y los patrones estructurales que se usan al implementarlo.

## CU1 — Construir una propuesta

Cubre RF1 y RF2.

Actor: colectivo civil.

El colectivo crea una propuesta con su titulo y arma el cuerpo en capitulos, articulos e incisos. Tambien adjunta material de soporte como comentarios, modificaciones y recursos. El sistema guarda la propuesta como un arbol donde un capitulo contiene articulos y un articulo contiene incisos, y permite recorrer ese arbol completo para contar sus elementos.

Patron: Composite, porque la propuesta y sus partes se tratan de forma uniforme, sea una hoja como un inciso o un compuesto como un capitulo.

Criterio de aceptacion: una propuesta con capitulos y articulos anidados reporta el total de elementos que contiene.

## CU2 — Recolectar y validar firmas

Cubre RF3, RF4, RF5 y RF6.

Actor: ciudadano.

El ciudadano firma una propuesta. El sistema valida la firma con un servicio externo y solo la cuenta si es valida. No cuenta firmas repetidas del mismo ciudadano sobre la misma propuesta. El sistema mantiene el numero de firmas validas.

Patrones: Adapter para hablar con el servicio externo de validacion a traves de una interfaz propia, y Flyweight para que las firmas que comparten el mismo tipo no repitan esos datos en memoria.

Criterio de aceptacion: una firma invalida o duplicada no incrementa el conteo; una firma valida y nueva si lo incrementa.

## CU3 — Sellar y enviar al Congreso

Cubre RF7, RF8, RF9 y RF10.

Actor: sistema, al alcanzarse el limite.

Cuando una propuesta llega a 25000 firmas validas dentro de los 90 dias, el sistema la sella. La propuesta sellada queda bloqueada y rechaza nuevas firmas o cambios. Luego el sistema la envia a la Oficina del Congreso y notifica a las comisiones.

Patrones: Proxy para bloquear la escritura sobre la propuesta sellada, y Facade para coordinar el envio que valida, sella, empaqueta y notifica en un solo paso.

Criterio de aceptacion: alcanzado el limite dentro del plazo, la propuesta se sella, rechaza cambios posteriores y queda enviada al Congreso.
