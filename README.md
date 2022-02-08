<img src="https://firebasestorage.googleapis.com/v0/b/tienda-ecommerce-e853c.appspot.com/o/demo%20tienda.gif?alt=media&token=c0fa9035-c8c8-4a4a-a0f6-d8253ff14320" alt="Gif animado" />

# Tienda Ecommerce

## Tecnologías utilizadas:
- bootstrap: 5.1.3
- React: 17.0.2
- styled components: 5.3.3
- react spinners: 0.11.0
- Firebase: 9.4.1

Este proyecto fue basado en la App de create react App: [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades

- Ver todos los productos.
- Filtrar productos por categorias (automoviles, camionetas).
- Agregar varias unidades del mismo producto.
- Tiene una memoria local para guardar los productos agregados.
- Crear ordenes de compra luego de llenar datos personales.

## Metodología utilizada

Este proyecto es el resultado de un curso de 2 meses que se realizo sobre React con la academia Coderhouse (https://www.coderhouse.com).

Se fueron agregando funcionalidades progresivamente, entre cada clase. (se crearon ramas para cada una)

Se utilizaron varion conceptos básicos y avanzados de React como:

- state and props
- creacion de componentes padres e hijos
- useState, useEffect, useParams

## Pasos para iniciar la aplicacion

1. Se debe crear un archivo `.env` en la raiz del proyecto para usar la base de datos de Firebase y correrlo localmente, con el siguiente contenido:

`REACT_APP_APIKEY= AIzaSyB8iMOjgxmSzKcuxMBOcrviW0YgMbjDfbM
REACT_APP_AUTH_DOMAIN= tienda-ecommerce-e853c.firebaseapp.com
REACT_APP_PROJECT_ID=tienda-ecommerce-e853c
REACT_APP_STORAGE_BUCKET=tienda-ecommerce-e853c.appspot.com
REACT_APP_MESSAGING_SENDER_ID=554641226612
REACT_APP_APP_ID=1:554641226612:web:22450c0f41c6461e140a21
REACT_APP_MEASUREMENT_ID=G-3ZN39PDYJC`

2. Correr el comando: `npm start`