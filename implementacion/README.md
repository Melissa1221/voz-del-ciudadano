# Implementacion

Patrones estructurales aplicados a Voz del Ciudadano, en TypeScript. Una clase por archivo, agrupados por patron en `src/`.

## Patrones

- composite: la propuesta como arbol de capitulos, articulos, incisos y recursos.
- adapter: validar una firma contra un servicio externo a traves de una interfaz propia.
- flyweight: compartir los datos de tipo de firma entre muchas firmas.
- proxy: bloquear la escritura cuando la propuesta queda sellada.
- facade: enviar al Congreso coordinando empaquetar y notificar.

## Como correr

Instalar dependencias:

    npm install

Correr una demo:

    npm run demo:composite
    npm run demo:adapter
    npm run demo:flyweight
    npm run demo:proxy
    npm run demo:facade

Correr los tests:

    npm test
