// Arreglos en JS
// Coleccion de informacion dentro de una variable

// No es recomendable iniciar un array de esta manera
// A menos que vayamos a crear un array ya con informacion fija
// Perfectamente puedo seguir añaniendo valores 101, 102, 103
// const arreglo = new Array(100)
// const arreglo = new Array()

// El push modifica el arreglo principal
const arreglo1 = []
arreglo1.push(1)
arreglo1.push(2)
arreglo1.push(3)
arreglo1.push(4)

console.log(arreglo1)

console.log('\n')
let arreglo2 = [1, 2, 3, 4]
let arreglo3 = [...arreglo2, 5]
console.table(arreglo3)

console.log('\n')
const arreglo4 = arreglo2.map(function (numero) {
  return numero * 2
})
console.table(arreglo4)
