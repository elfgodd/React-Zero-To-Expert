# React: De cero a experto ( Hooks y MERN )

## Section 01

## Section 02

¿Qué aprenderemos en esta sección?

¿Qué es React?

Conceptos generales

Babel

JSX

Daremos nuestros primeros pasos y una pequeña aplicación que nos ayudará a perderle el miedo a React rápidamente

## Folder 01: introduccion a react

## Section 03:

¿Qué aprenderemos en esta sección?

Generar la base sobre JavaScript

Constantes y variables Let

Template String

Objetos literales

Arreglos

Desestructruación \* (sumamente importante)

Promesas

Fetch API

Ternarios

Async - Await

Mi objetivo aquí es que tengamos las bases que nos ayuden a que podamos diferenciar fácilmente qué es propio de React y qué es propio de JavaScript. Estos conceptos y ejercicios nos ayudarán a suavizar la curva de aprendizaje de React.

## Folder: introduccion a javascript moderno

1. Const & Let:

2. Template String:

3. Objeto Literal:

4. Arreglos: Array.prototype.map()

   https://developer.mozilla.org/es/docs/Glossary/array

   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

5. Funciones:

   https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

6. Desestructuración de objetos:
   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
7. Desestructuración de arreglos:

   mismo link que el punto 6

8. Import, export y funciones comunes de arreglos
   Array.prototype.find():
   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

   Array.prototype.filter():
   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

9. Promesas:

   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

10. Fetch API:

    https://developer.mozilla.org/es/docs/Web/API/Fetch_API

11. Async - Await:

    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

    https://javascript.info/async-await

12. Operador condicional (ternario):
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

**_Nota sobre JavaScript_**

Terminamos la sección de reforzamiento de JavaScript
Pero recuerden que esto es para entrar en calor y que lo temas principales de JavaScript que necesito que conozcan estén cubiertos, pero les recomiendo que cualquier duda adicional sobre el lenguaje, sobre métodos y demás, la consulten aquí

https://developer.mozilla.org/es/

## Section 04:

¿Qué veremos en esta sección?

Nuestra primera aplicación - Hola Mundo

Exposiciones sobre los componentes

Creación de componentes (Functional Components)

Propiedades - Props

Impresiones en el HTML

PropTypes

DefaultProps

Introducción general a los Hooks

useState

Es una sección importante, especialmente para todos los que están empezando de cero en React, ya que dará las bases de cómo segmentar la lógica de nuestra aplicación en pequeñas piezas más fáciles de mantener.

## Folder 03: Primeros pasos en React

### 1. Primera aplicación de React:

https://create-react-app.dev/

### 2. Estructura de directorios

https://developers.google.com/search/docs/advanced/robots/intro?hl=es&visit_id=637807502550419828-2368103718&rd=1

https://developers.google.com/web/ilt/pwa

https://create-react-app.dev/docs/available-scripts/

### 3. Reto: Tarea

- Crear un nuevo componente dentro de la carpeta SRC llamado
  `CounterApp`

- El CounterApp debe de ser un **Functional Component**

- El contenido del **CounterApp** debe de ser:

  ```
      <h1>CounterApp</h1>
      <h2> { value } </h2>
  ```

- Donde `"value"` es una propiedad enviada desde el padre hacia
  el componente **CounterApp** **(Debe ser númerica validada con PropTypes)**

- Reemplazar en el index.js el componente de <PrimeraApp />
  por el componente <CounterApp />
  (no se olviden del value que debe de ser un número)

- Asegúrense de no tener errores ni warnings
  (Cualquier warning no usado, comentar el código)

### 4. SyntheticEvent:

https://es.reactjs.org/docs/events.html

### 5. useState - Hook:

https://es.reactjs.org/docs/hooks-intro.html

## Section 05: Pruebas unitarias y de integracion

¿Qué veremos en esta sección?

Introducción a las pruebas

AAA

Arrange - Arreglar

Act - Actuar

Assert - Afirmar

Primeras pruebas

Jest

Expect

toBe

Enzyme

Comandos útiles en la terminal para pruebas

Revisar elementos renderizados en el componente

Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

Probando las secciones anteriores

### 1. Test, Jest:

https://jestjs.io/

Error in Jest: https://github.com/jest-community/eslint-plugin-jest/blob/v25.7.0/docs/rules/no-conditional-expect.md

https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

### 2. Test, Enzyme:

https://enzymejs.github.io/enzyme/

https://github.com/wojtekmaj/enzyme-adapter-react-17

https://www.npmjs.com/package/enzyme-to-json

### Tarea en <CounterApp />

- Crear las siguientes pruebas para el <CounterApp />

  - debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)
    y sus valores por defecto

  - debe de mostrar el valor por defecto de 100
  - usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador

## Section 06:

¿Qué veremos en esta sección?

Custom Hooks

Fetch hacia un API

Comunicación entre componentes

Clases de CSS

Animaciones

Enviar métodos como argumentos

Crear listados

keys

Giphy

Esta es una aplicación pequeña pero muy ilustrativa que explica cómo utilizar React + customHooks para poder resolver necesidades en específico que podremos re-utilizar después.

## Folder 04: Gif Expert Aplicacion

https://es.reactjs.org/docs/faq-structure.html

https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

### 1. Fetch API - Obtener las imágenes deseadas:

https://developers.giphy.com/docs/api/endpoint/#search

### 2. Animaciones por CSS en nuestra aplicación

https://animate.style/

## Section 07:

¿Qué veremos en esta sección?

Aprender cómo realizar backups a repositorios de Git

Subir nuestro repositorio a GitHub

Uso de Github Pages

Desplegar nuestra aplicación de React

Generar build de producción de nuestra aplicación

Aunque es una sección pequeña, les puede servir para desplegar infinidad de proyectos de React de forma gratuita, sin contar que tendrán respaldos de sus proyectos por si llegan a perder su trabajo que tenían localmente en su computadora.

## Generando el build de produccion y despliegues en GitHub Pages

http-server: a simple static HTTP server:
https://www.npmjs.com/package/http-server

https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git

`npm run build`

`npm install --global http-server`

Para correr el servidor despues del build, debemos estar dentro de la carpeta build
y correr el siguiente comando
`http-server -o`

## Section 08: Testing - Probando la aplicacion de GifExpert

¿Qué veremos en esta sección?

Seguir el camino de las pruebas

Pruebas en componentes específicos

Pruebas en componentes de forma individual

Pruebas con customHooks

Esperar cambios en un customHook

Simular eventos en inputs y formularios

Simular llamadas a funciones

Evaluar si existen elementos en el componente

En esta sección seguiremos expandiendo todo lo que habíamos visto anteriormente en otras secciones de pruebas, pero ahora veremos más a detalle los temas y adicionalmente introduciremos nuevos conceptos y nuevos tipos de pruebas.

https://enzymejs.github.io/enzyme/

enzyme-to-json:  
https://www.npmjs.com/package/enzyme-to-json

https://github.com/wojtekmaj/enzyme-adapter-react-17

Pruebas sobre customHooks:  
https://react-hooks-testing-library.com/

## Section 09: Profundizacion Hooks - Generales

¿Qué veremos en esta sección?

Profundizar en el tema de los Hooks

Crear otros customHooks

useState

useCounter - Personalizado

useEffect y sus precauciones

useRef

useFetch - Personalizado + optimizaciones

useLayoutEffect

Memo

useMemo

useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos más adelante, pero en esta sección nos enfocaremos en estos trabajos y para qué nos pueden servir.

Adicionalmente estaremos dejando las bases para lo que será una sección de pruebas sumamente interesante después.

## Folder 05: Hook App

### 1. useLayoutEffect:

https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect

### 2. React.memo:

Es una funcion que va regresar la forma memorizada de mi componente,
y solo se va disparadas si las props cambian

2 Casos de uso principales

1 Mandamos una funcion a un componente hijo

## Section 10: Profundizacion Hooks - useReducer

¿Qué veremos en esta sección?

useReducer

Reducers

Teoría de un reducer

Aplicación de TODOs

CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente.

### 1. useReducer:

https://es.reactjs.org/docs/hooks-reference.html#usereducer

// Manera sencilla
const [state] = useReducer(reducer, initialState)
// Manera completa
const [state, dispatch] = useReducer(reducer, initialState, init)

### 2. Guardar TODOs en LocalStorage:

https://www.youtube.com/watch?v=hb8O0qRqiSk&t=2s

### 3. Array.prototype.filter():

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Section 11: Profundizacion Hooks - useContext

¿Qué veremos en esta sección?

Context

Provider

useContext

React Router

Links y NavLinks

CreateContext

SPA ( Single Page Application )

El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.

### 1. useContext:

https://v5.reactrouter.com/web/guides/quick-start

## Section 12: Pruebas unitarias y de integracion - Hooks:

¿Qué veremos en esta sección?

Pruebas sobre Hooks y CustomHooks

Ese es el tema principal, demostrar cómo podemos evaluar cada unos de los hooks aplicados anteriormente con sus casos reales de uso.

Hay varios extras, como la prueba de un Reducer, que realmente no es nada complicado, también quiero aclarar qué nos toca evaluar a nosotros y qué no es responsabilidad nuestra.

https://enzymejs.github.io/enzyme/

https://www.npmjs.com/package/enzyme-to-json

https://react-hooks-testing-library.com/

https://github.com/wojtekmaj/enzyme-adapter-react-17

How to use waitForNextUpdate function in testing library react-hooks:
'https://www.tabnine.com/code/javascript/functions/testing-library__react-hooks/waitForNextUpdate'

https://reqres.in/api/users?page=2RealExampleRef

## Section 13: Bonus:

¿Qué veremos en esta sección?

Subir código a nuestro repositorio

Tener un listado de customHooks y código que podemos reutilizar

Una idea para mantener tu repositorio ordenado con ejemplos

No es una sección obligatoria, pero puede ayudarles a tener su código ordenado y fácil de utilizar en proyectos futuros.

## Folder 06: Custom Hooks

## Section 14

¿Qué veremos en esta sección?

SPA ( Single Page Application ) a profundidad

Diferentes temas en la misma aplicación aplicados a diferentes rutas

Multiples Routers

Push y Replace en el History

Leer argumentos por URL

QueryParams

Aplicar filtros utilizando QueryStrings

En esta sección aún no haremos protección de rutas, pero dejaremos el estilo de esos componentes listos para la siguiente sección.

Aquí quiero enfocarme en la funcionalidad de la aplicación suponiendo que estamos autenticados.

## Folder 07: Heroes App

HeroesApp, Single Page Application, SPA

https://reactrouter.com/

https://v5.reactrouter.com/web/guides/quick-start

https://gist.github.com/Klerith/566b484ac6fe46c8fa949e61df671a18

className={({ isActive }) =>
'nav-item nav-link' + (isActive && 'active')
}

https://animate.style/ :

```
className="animate__animated animate__fadeIn"
className="animate__animated animate__fadeInLeft"
```

### 1. query-string:

Parse and stringify URL query strings
https://www.npmjs.com/package/query-string

## Section 15: Proteccion de rutas

Temas puntuales de la sección
¿Qué veremos en esta sección?

Rutas públicas

Rutas privadas

Login y logout - Sin backend aún

Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario.

Context

Reducer

Esta es una sección pequeña pero importante para trabajar las bases de la autenticación y protección de nuestra aplicación.

## Section 16: Pruebas de nuestra aplicacion de Heroes

Temas puntuales de la sección
¿Qué veremos en esta sección?

Nuevos tipos de pruebas

Pruebas en rutas privadas y públicas

MemoryRouter

Pruebas en nuestro DashboardRouter

Pruebas en el AppRouter

Simular URLs y segmentos

Simular queryParams y queryStrings

Recuerden que el objetivo de las pruebas, es ir probando cosas nuevas cada vez y tener un repertorio completo de diferentes casos.

### 1. Inicio de la sección - Pruebas en HeroApp

https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17

https://www.npmjs.com/package/enzyme-to-json

## Section 17: Bonus: Formas de trabajar con imagenes

https://webpack.js.org/guides/dependency-management/#requirecontext

## Section 187: JournalApp - SASS - Estructura y Diseño

## Folder 08: Journal App

Temas puntuales de la sección
¿Qué veremos en esta sección?

SASS

Diseño completo de la aplicación de forma manual

Uso de funciones de SASS

Configuración y uso de parciales

Transiciones en SASS

Esta sección está totalmente enfocada en aprender a utilizar SASS para crear nuestro estilo de la aplicación, la cual haremos todo nosotros de absoluto cero.

### 1. Implementando rutas principales y rutas hijas

https://v5.reactrouter.com/web/guides/quick-start

### 2. Sass Partials

https://sass-lang.com/documentation

## Section 19: Redux - Que es y conceptos?

¿Qué veremos en esta sección?

Redux

Store

Middlewares

Dispatch

Actions

State

Acciones asíncronas

Es una sección sumamente pequeña, pero quiero darles una explicación teórica sobre Redux antes de entrar en él, pero la ventaja es que para estas alturas, ya deberíamos de saber sobre el Reducer, el cual es el corazón del Redux, por consecuencia aprender Redux en este instante debería ser más fácil!

## Section 20: Introduccion a Redux y autenticacion en Firebase

Temas puntuales de la sección
¿Qué veremos en esta sección?

Redux aplicado en nuestro proyecto

Firebase

FireStore

Redux Devtools

Thunk

Formularios

Google SingIn

Acciones Asíncronas

Mantener el estado de la autenticación

En esta sección configuraremos Redux en nuestro proyecto por primera vez, aplicado al inicio en la parte de la autenticación y mantener el estado de la misma a lo largo de toda la aplicación.

### 1. Configurando Redux en nuestra aplicación

https://es.redux.js.org/

https://react-redux.js.org/

https://github.com/zalmoxisus/redux-devtools-extension#usage

### 2. Configuración inicial de Firebase

https://firebase.google.com/docs/web/modular-upgrade

https://firebase.google.com/

1. Ir a la consola de Firebase
2. Agregar projecto
3. Agregar nombre
4. Seleccionar que NO quiero Google Analitycs

// Agregar Autenticacion

1. Click en el TAB Autentication
2. Click en Native providers: Email/Password
3. Activar el boton de Email/Password unicamente
4. Agregar el Auth de google, Agregar otro proveedor
5. Activar el boton y agregar el correo que queremos para soporte

// Instalar Firebase
`npm install firebase@8.10.0`

### 3. Thunk Middleware - Acciones asíncronas

https://www.npmjs.com/package/redux-thunk

// Firebase para SQL Developers Youtube Playlist
https://www.youtube.com/playlist?list=PLCKuOXG0bPi29EkcAuVCln9ISbExcQk66

### 4. Configurar Firebase y Google Sign-in

1. Ir a la consola de Firebase, luego al proyecto
2. Click en el icono de agregar Aplicacion Web
3. Agregar un nombre, NO agregar hosting
4. Terminar
5. Click en el icono del App
6. Click en el icono de Herramientas dentro del App
7. Click en el boton de Config abajo
8. Copiar configuracion
9. Pegar en carpeta firebase/config
10. listo

### 5. Manejo de errores del formulario

https://www.npmjs.com/package/validator

`npm i validator`

### 6. Mensajes de error

https://sweetalert2.github.io/
`npm install sweetalert2`

## Section 21: JournalApp - Redux - CRUD en Firestore y subida de archivos

Temas puntuales de la sección

¿Qué veremos en esta sección?

    CRUD hacia Firestore

    Expandiendo nuestro estore añadiendo otros reducers

    Seleccionar y subir archivos

    Animaciones adicionales a nuestra aplicación

    Limpieza en el logout

Esta sección está enfocada ahora en las entradas de nuestro diario, asegurándose de que grabe únicamente en el documento del usuario autenticado.

### 1. Crear una nueva nota

1. Ir a la consola de Firebase
2. Click en Create DataBase
3. Escojer production mode
4. Escojer la region deseada

Collection, una collecion como una serie de datos, una lista, un arreglo

// Reglas de la base de datos para no tener errores de permiso
// Uncaught (in promise) FirebaseError: Missing or insufficient permissions.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

// Si esta Autenticado Login Active puede utilizar la WebApp

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null
    }
  }
}
```

### 2. Mostrar las notas en el menú lateral

https://momentjs.com/

### 3. Cloudinary.com - Backend para subir imágenes

https://cloudinary.com

1. Crear cuenta / login
2. Click en Settings el icono
3. Click en Upload
4. Upload presets: Click en Add upload preset

```
Upload preset name: react-journal
Signing Mode: Unsigned
```

5. Copiar el Upload preset name: react-journal
6. SAVE

// Postman POST Upload image, usa tu cloud name ejemplo el mio es alienroom

```
https://api.cloudinary.com/v1_1/alienroom/upload
Body: form-data

KEY:                       | VALUE:
file (change text to file) | search the to upload
upload_preset              | react-journal

```

### 4. Animaciones en nuestra aplicación

https://animate.style/

## Section 22: Pruebas con Redux, Firebase, Firestore y autenticacion

Temas puntuales de la sección

¿Qué veremos en esta sección?

    Profundizando en pruebas

    Pruebas en Firebase y Firestore

    Pruebas con reducers

    Variables de entorno de desarrollo, test y producción

    Pruebas en tareas asíncronas

Esta sección continúa el tema de las pruebas unitarias y de integración con el objetivo de seguir cubriendo temas nuevos. Las pruebas conforme se van avanzando, efectivamente se van haciendo más complejas pero la idea es darles a ustedes las herramientas para que puedan probar cualquier cosa que ustedes necesiten.

### 1. Continuación del proyecto - JournalApp - Testing

Enzyme: https://enzymejs.github.io/enzyme/

wojtekmaj/enzyme-adapter-react-17:
https://github.com/wojtekmaj/enzyme-adapter-react-17

enzyme-to-json: https://www.npmjs.com/package/enzyme-to-json
