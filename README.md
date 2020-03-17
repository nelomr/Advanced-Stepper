### Comentarios sobre las tareas realizadas
Step 1
    He añadido todas las funciones pedidas, tanto los botones como el soporte para teclado, tanto para flechas adelante/atrás, como números para ir al paso X. Tambien he añadido la lógica necesaria para que no se pueda pasar a un paso superior sin haber pasado por los de antes, tanto al hacer click en los números como si se mete la url en el navegador o se presiona un número de teclado. Una vez visitado el paso ya se puede ir directamente, desde cualquier otro.

    Los step los pasa a ¡ gestionar la store.

    Aunque no se pedía he optado por generar rutas de cada paso, he creido oportuno hacerlo ya que normalmente si es un proceso de checkout si por alguna razón los usuarios lo abandonan, de esta forma se puede controlar en que puntos lo hacen y saber en cual hay que mejorar.

Step 2
    He añadido una prop al componente para que el nombre de cada paso se muestre sobre él, en vez de debajo y soportar ambas variantes.
    Hecho el Responsiveness y añadido solución para dispositivos pequeños.

Step 3
    Llamada realizada con los datos proporcionados. Mejorada la arquitectura del proyecto, tanto con la store, como con la llamada. Tambien he añadido estilos globales y sacado los estilos del .vue de los componentes para tenerlo todo mas ordenado y claro. He movido los componentes stepOne, stepTwo... a la carpeta pages, ya que han pasado a ser páginas en mi solución.

    He añadido un texto indicativo en el paso 3 de que la llamada se ha realiado, con Respuesta API OK o Respuesta API ERROR.

Step 4
    Añadidos todo los requisitos, tanto las vistas nuevas como lo componentes necesarios. He añadido en el paso 4 un botón que dirige a la ruta nueva /orders. En esa nueva vista esta el nuevo diseño de listado de pedidos el cual cada pedido dirige a su detalle.

    Aquí he mejorado la arquitectura creando modelos de los datos que se han utilizado, ya que en la repuesta hay gran cantidad de información y la mayoria no se gasta en este caso. Como se indicaba e relacionado los producros mediante su id para poder mostrar sus datos en el detalle.

    He pasado a persistir los datos para que al recargar la página se mantengan los datos de la store, se almacenan en la session storage. Esta configurado para que se borren al cerrar la tab o pestaña en el navegador.

    Algunos puntos no me han quedado claro ya que el en el diseño aparecen representados datos que me han sido imposible encontar en la repuesta de la api proporcionada, sonre todo en el detalle de pedido, tales como el apartado productos(bolas de lavandería, prenda planchada...).

    El requisito 5 - Puedes ignorar que las tarjetas son desplegables, no necesitamos esa información extra. Esto no se que indica. En el diseño proporcionado no hay nada que indique que sean tarjetas desplegables.

    Luego el código de logística es 'PICKUP-DELIVERY', esto tampoco se si lo he representado bien, o bien por falta de desconocimiento de lógica de producto o porque en la a repuesta de la api no estaba, ya que es confuso, ya que hay un atributo logistics pero he entendido que el atributo que mas sentido tneía era orderStatus y su código. Aún así como en todos los pedidos era igual no había forma de comparar y saber cual era ya que PICKUP-DELIVERY no aparece en la repsuesta.

    Y por último el tema de los horarios, tambien es confuso que hacer con eso, no está explicado ni hay diseño de esa parte. He realizado una solución libre al apretar el botón de cambio de hora.

Step 5
    He realizado varios test unitarios de los componentes y un test e2e.


# mrjeff-tech-front

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
