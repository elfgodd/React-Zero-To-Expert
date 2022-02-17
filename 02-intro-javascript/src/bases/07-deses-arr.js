// Desestructuracion de Arreglos
// Asignacion Desestructurada

const peliadores = ['goku', 'vegeta', 'trunks', 'gohan']
console.log(peliadores[0])
console.log(peliadores[1])
console.log(peliadores[2])
console.log(peliadores[3])

console.log('\n')
// Los arreglos vienen en orden o posiciones
const [p1, p2, p3, p4] = peliadores
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

console.log('\n')
const peliadores2 = ['goku', 'vegeta', 'trunks', 'gohan']
const [, x1, , x2] = peliadores2
console.log(x1, x2)

console.log('\n')
const retornaArreglo = () => {
  return ['ABC', 123]
}
const [letras, numeros] = retornaArreglo()
console.log('letras: ', letras, ',', 'numeros: ', numeros)

console.log('\n')
// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('hola mundo')
    },
  ]
}

const arr = useState('Goku')
console.log(arr)
console.log('\n')
console.log(arr[0])
console.log('\n')
console.log(arr[1])
console.log('\n')
console.log(arr[1]())
console.log('\n')

console.log('\n')
// Solucion Tarea
const [nombre, setNombre] = useState('Goku')
console.log(nombre)
setNombre()

console.log('\n')
