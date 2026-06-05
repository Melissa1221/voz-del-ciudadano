# Casos de prueba — Voz del Ciudadano

Casos que verifican los requisitos a traves de los patrones implementados. La evidencia de ejecucion de cada caso se agrega al final, una vez corridos los tests.

## CP-01 — Contar elementos de la propuesta

Verifica RF1 mediante el Composite.

Entrada: una propuesta con un capitulo que contiene dos articulos y un inciso.
Esperado: el conteo total de elementos coincide con la suma de capitulo, articulos e inciso.

## CP-02 — Firma valida se cuenta

Verifica RF3, RF4 y RF6 mediante el Adapter.

Entrada: una firma con documento valido segun el servicio externo.
Esperado: la firma se acepta y el conteo de firmas validas sube en uno.

## CP-03 — Firma invalida no se cuenta

Verifica RF4 mediante el Adapter.

Entrada: una firma con documento que el servicio externo marca como invalido.
Esperado: la firma se rechaza y el conteo no cambia.

## CP-04 — Firma duplicada no se cuenta

Verifica RF5.

Entrada: dos firmas del mismo ciudadano sobre la misma propuesta.
Esperado: solo se cuenta una.

## CP-05 — Firmas del mismo tipo comparten datos

Verifica RNF1 mediante el Flyweight.

Entrada: dos firmas que comparten el mismo tipo de documento y distrito.
Esperado: ambas reutilizan la misma instancia de tipo de firma.

## CP-06 — Umbral exacto de sellado

Verifica RF8.

Entrada: una propuesta con 24999 firmas validas y luego con 25000.
Esperado: con 24999 no se sella; con 25000 se sella.

## CP-07 — Plazo vencido

Verifica RF7.

Entrada: una propuesta que llega a 25000 firmas despues de los 90 dias.
Esperado: la propuesta no se sella y queda rechazada por plazo.

## CP-08 — Propuesta sellada bloquea cambios

Verifica RF9 mediante el Proxy.

Entrada: una propuesta ya sellada a la que se intenta agregar una firma o un cambio.
Esperado: la operacion se rechaza con error.

## CP-09 — Envio al Congreso

Verifica RF10 mediante el Facade.

Entrada: una propuesta que alcanza el limite dentro del plazo.
Esperado: el envio ejecuta validar, sellar, empaquetar y notificar, y deja la propuesta enviada.

## Evidencia

Se completa luego de correr los tests.
