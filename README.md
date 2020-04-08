## Comentarios

soporte para teclado, tanto para flechas adelante/atrás, como números para ir al paso X. Tambien he añadido la lógica necesaria para que no se pueda pasar a un paso superior sin haber pasado por los de antes, tanto al hacer click en los números como si se mete la url en el navegador o se presiona un número de teclado. Una vez visitado el paso ya se puede ir directamente, desde cualquier otro.

He pasado a persistir los datos para que al recargar la página se mantengan los datos de la store, se almacenan en la session storage. Esta configurado para que se borren al cerrar la tab o pestaña en el navegador.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
