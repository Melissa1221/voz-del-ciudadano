# Especificacion de requisitos — Voz del Ciudadano

Curso CC3S2, PC3. Sistema para iniciativas legislativas ciudadanas.

## Proposito

El sistema permite a los colectivos civiles crear propuestas normativas y recolectar firmas de apoyo de la sociedad civil. Cuando una propuesta alcanza 25000 firmas validas dentro de un plazo de 90 dias, el sistema la sella y la envia a la Oficina del Congreso para que la reparta a las comisiones correspondientes.

## Requisitos funcionales

RF1. El sistema permite a un colectivo crear una propuesta normativa con un titulo y un cuerpo organizado en capitulos, articulos e incisos.

RF2. El sistema permite agregar a una propuesta material de soporte: comentarios, modificaciones y recursos como documentos o videos.

RF3. El sistema permite a un ciudadano registrar una firma de apoyo a una propuesta.

RF4. El sistema valida cada firma antes de aceptarla y solo cuenta las firmas validas.

RF5. El sistema no cuenta firmas duplicadas de un mismo ciudadano sobre la misma propuesta.

RF6. El sistema lleva el conteo de firmas validas de cada propuesta.

RF7. El sistema controla que la recoleccion ocurra dentro de un plazo de 90 dias desde la creacion de la propuesta.

RF8. El sistema sella la propuesta cuando alcanza 25000 firmas validas dentro del plazo.

RF9. Una vez sellada, la propuesta queda bloqueada: no se aceptan nuevas firmas ni cambios en su contenido.

RF10. El sistema envia la propuesta sellada a la Oficina del Congreso y notifica a las comisiones correspondientes.

## Requisitos no funcionales

RNF1. El conteo de firmas debe sostener volumenes grandes sin guardar datos repetidos por cada firma.

RNF2. La validacion de firmas se apoya en un servicio externo y el sistema no depende de su implementacion concreta.
