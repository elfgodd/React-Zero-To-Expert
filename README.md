# React: De cero a experto ( Hooks y MERN )

## 01 introduccion a react

## 02 introduccion a javascript moderno

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

## 03 Primeros pasos en React

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

### 6. Test, Jest:

https://jestjs.io/

Error in Jest: https://github.com/jest-community/eslint-plugin-jest/blob/v25.7.0/docs/rules/no-conditional-expect.md

https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

### 6. Test, Enzyme:

https://enzymejs.github.io/enzyme/

https://github.com/wojtekmaj/enzyme-adapter-react-17

https://www.npmjs.com/package/enzyme-to-json

### Tarea en <CounterApp />

- Crear las siguientes pruebas para el <CounterApp />

  - debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)
    y sus valores por defecto

  - debe de mostrar el valor por defecto de 100
  - usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador

## 04 Gif Expert App

https://es.reactjs.org/docs/faq-structure.html

https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

### 1. Fetch API - Obtener las imágenes deseadas:

https://developers.giphy.com/docs/api/endpoint/#search

### 2. Animaciones por CSS en nuestra aplicación

https://animate.style/

## 05 Generando el build de produccion y despliegues en GitHub Pages

http-server: a simple static HTTP server:
https://www.npmjs.com/package/http-server

https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git

`npm run build`

`npm install --global http-server`

Para correr el servidor despues del build, debemos estar dentro de la carpeta build
y correr el siguiente comando
`http-server -o`

## 06 Testing - Probando la aplicacion de GifExpert

https://enzymejs.github.io/enzyme/

enzyme-to-json:  
https://www.npmjs.com/package/enzyme-to-json

https://github.com/wojtekmaj/enzyme-adapter-react-17

Pruebas sobre customHooks:  
https://react-hooks-testing-library.com/

## 05 Hook App

### 1. useLayoutEffect:

https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect

### 2. React.memo:

Es una funcion que va regresar la forma memorizada de mi componente,
y solo se va disparadas si las props cambian

### 2. React.memo:

2 Casos de uso principales

1 Mandamos una funcion a un componente hijo

### 3. useReducer:

https://es.reactjs.org/docs/hooks-reference.html#usereducer

// Manera sencilla
const [state] = useReducer(reducer, initialState)
// Manera completa
const [state, dispatch] = useReducer(reducer, initialState, init)

### 4. Guardar TODOs en LocalStorage:

https://www.youtube.com/watch?v=hb8O0qRqiSk&t=2s

### 5. Array.prototype.filter():

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

### 5. useContext:

https://v5.reactrouter.com/web/guides/quick-start

### 6. Pruebas unitarias y integracion de - Hooks:

https://enzymejs.github.io/enzyme/

https://www.npmjs.com/package/enzyme-to-json

https://react-hooks-testing-library.com/

https://github.com/wojtekmaj/enzyme-adapter-react-17

How to use waitForNextUpdate function in testing library react-hooks:
'https://www.tabnine.com/code/javascript/functions/testing-library__react-hooks/waitForNextUpdate'

https://reqres.in/api/users?page=2RealExampleRef
