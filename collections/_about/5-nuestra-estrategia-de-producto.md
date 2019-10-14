---
layout: default
title:  "Nuestra estrategia de producto"
---
### Nuestra estrategia de producto consiste en decir “No”

Hoy tenemos 30K clientes. Si cada uno tiene un problema (algunos no tendrán, otros tendrån más de uno, otros tendrán problemas compartidos) entonces tenemos 30K problemas que resolver. En los 6WC, es decir cada 2 meses, resolveremos 25 problemas. Es decir, resolvemos menos del 0.1% de los problemas de nuestros clientes.

Esto hace que Tiendanube a lo largo de su vida va a tener que priorizar. Por qué? Porque no tenemos un equipo que nos permita trabajar en 30k problemas. Tenemos que alinearnos en que esto va a ser así y en cuáles van a ser los criterios de priorización. Priorizamos por # de clientes? Por GMV? Por brands? Por clientes de parceiros top? Por revenue (no necesariamente es GMV, depende del rebate de GWs)? Cuál es la mejor definición customer-centric?

La respuesta es dificilísima. Tenemos que todo estar de acuerdo en que no vamos a poder hacer todo e ir construyendo juntos una definición. Mismo si tenemos equipos dedicados a cada área, vamos a tener que priorizar.

### Cuáles son los problemas en los que queremos enfocarnos?
Si agarramos una lupa y examinamos las problemáticas que tienen diferentes Merchants vamos a ver dos grandes familias: problemáticas comunes (el 80% de lo que todos necesitan) y otras problemáticas particulares de cada uno.

Para que Tienda Nube pueda escalar de manera saludable decidimos enfocar toda nuestra energía en ese 80% que todos los Merchants necesitan (no el 80% de lo que las total transactions necesitan). Por ejemplo, tener una infraestructura que pueda procesar miles de pedidos por segundo es algo que todos los Merchants necesitan, entonces la construímos y se la ofrecimos a todo el mundo.

Eso significa que vamos a hacer todo Shipping en el core? No, vamos a hacer el 80% que todos necesitan.

Para ofrecer a nuestros Merchants ese último 20% de funcionalidades, construímos una API pública que permite a nuestros Partners ofrecer soluciones de altísima calidad a nuestros Merchants en forma de Apps. Para lograr implementar el 100% de las funcionalidades nos apoyamos en nuestro ecosistema!

Cuáles son entonces las áreas de trabajo y hasta dónde vamos a ir en cada una?
  - Orders
  - Catalog
  - [Payments](https://docs.google.com/document/d/1YoMtPq8vxvQAfwDSX8-wYYgBZ68kw9tqhNab2TdndiY/edit#heading=h.gxwdnqja4slr)
  - [Shipping](https://docs.google.com/document/d/1Tahj8zUv9P2evt7ayD20YsE1P64GotY1FkVxRKPqkGA/edit#heading=h.qjs8d9e95ipt)
  - Lending
  - Checkout
  - Sales Channels
  - Storefront
  - Themes
  - Analytics
  - Marketing
  - Customers
  - Billing
  - Communication
    - Merchants team members
    - Merchants ← → Customers
    - Merchants ← → Partners
    - Merchants ← → Tiendanube
  - Infrastructure

Es fundamental que estemos alineados en esto. Por qué? Imaginemos que le decimos que sí a todo o le decimos que sí a clientes que nos dicen que si no hacemos el feature:
  - No migro a Tiendanube.
  - Me voy de Tiendanube.
  - Los prendo fuego en redes sociales.

Imaginemos que un cliente nos pide un feature, le decimos que lo hacemos y arrancamos. Otro cliente nos pide un feature, le decimos que lo hacemos y arrancamos. A los 10 clientes, no vamos a tener cómo cumplir la promesa sin faltar a las promesas anteriores. Unos años después y Tiendanube se va a ver así:

<img src="https://i.imgur.com/SC5pmPx.png">

Es una relación basada en amenazas. Algún día uno de estos clientes se va a ir (porque no le vamos a dar algo) _pero las funcionalidades que nos pidió para el producto se van a quedar_. “Pero hagámoslo sólo por esta vez, es clave!”. Puede haber excepciones? Sí, claro. El problema es cuando escuchás esa frase 50 veces.

### No hay soluciones sencillas
El tamaño del trabajo no debería ser motivo para incluir una funcionalidad en el producto. Si puede ser para subirla en el roadmap, pero es una decisión de roadmap, no de producto.

No hay cambios chicos o fáciles. Tomemos el ejemplo de “Agregar días de producción a un pedido” donde un cliente puede indicar que un producto demora X días en elaborarse para sumarle los días al envío y notificarlo al Consumer.

> “Es solo agregar un campo en el formulario del producto y sumar los días al envío”. Correcto? Incorrecto.

  1. Estamos agregando días, entonces no puede ser negativo, eso hay que validarlo en el formulario, así que tenemos que codear el backend y agregar tests de unidad para asegurarnos que no rompemos nada.
  2. El campo es inherente al producto? O los días dependen de cada variante? Hay que hablar con merchants para entender mejor? Si ya habíamos arrancado a desarrollarlo por producto y nos damos cuenta que es por variante, perdemos días de ejecución.
  3. Ya tenemos un mensaje de error cuando la cantidad de días es incorrecta? Hay que pasarlo por copy? Hay que diseñar el estilo del mensaje de error?
  4. Hay que traducir todos los nuevos textos que agreguemos a la plataforma.
  5. La validación la hicimos en el back end, pero también tenemos que hacerla en el front end. Vamos a mostrar el mensaje igual que al de backend? Son el mismo mensaje? El diseño es igual?
  6. Los días que sumamos son días hábiles o días corridos? Depende del Merchant? Si depende, qué hacemos? Agregamos un campo adicional que nos digan si son hábiles o no?
  7. El campo es un input o agregamos un select? Si es un select, qué días mostramos? Por qué?
  8. Se tiene que ver bien en mobile y en desktop
  9. Hay que destacar que el pedido está en producción en el detalle del pedido en el admin
  10. Tenemos que agregar una columna en la base de datos

Y eso es solo el admin…
  1. En la tienda tenemos que sumar los días de producción solo si el producto tiene esos días al cálculo de costo de envío
  2. Si hay dos productos en el carrito uno con 5 días y el otro con 10 días, sumamos 10 o sumamos 15? Si justo son el mismo producto? Se hacen al mismo tiempo?
  3. Si el medio de envío no devuelve fecha estimada, cómo lo mostramos?
  4. Como dejamos claro cuál es el producto que tiene plazo de producción? Tal vez el consumer no quiere esperar ese tiempo y prefiere sólo sacar del carrito ese producto y no comprarlo
  5. Si un pedido tiene producción y el otro no, el Merchant podría hacer dos envíos. Pero Tienda Nube no tiene modelado múltiples envíos por pedido. Tenemos que agregar el feature…

Imaginemos que hacemos todo y lanzamos, la rompimos! Correcto? Incorrecto.

  1. Nos damos cuenta que el desarrollo está incompleto
    - No puedo configurar días desde la app mobile
	- No puedo actualizar los días de producción desde la carga masiva
	- La API no devuelve los días de producción del producto
  2. Empiezan a llegar “bugs”
    - Mi envío se llama “Same day delivery” pero ahora dice “a veces” que llega en 5 días (porque el carrito tiene un producto que llega en 5 días de producción)
  3. Rompemos apps
    - La app de “Avise me quando chegar” no maneja esta condición nueva y muestra el cartel para productos sin stock que se pueden comprar

Y estoy dejando de lado todo el costo de entrenar a CS en la nueva funcionalidad, acciones de comunicación del feature, trabajar en boostear el adoption de las personas que lo pidieron, …

<img data-src="http://tinu.be/static/images/11.png" class="lazyload" />
<small>Legenda de la imagene</small>