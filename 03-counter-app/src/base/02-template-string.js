const nombre = 'Elf'
const apellido = 'God'

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`

// console.log( nombreCompleto );

export function getSaludo(nombre = 'Paladin') {
  return 'Hola ' + nombre + '!'
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
