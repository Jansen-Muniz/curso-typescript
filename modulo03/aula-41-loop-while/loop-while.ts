//=> exemplo 01 - while

let counter = 0

while (counter < 5) {
  console.log(counter)
  counter++
}

//=> exemplo 02 

let numero = 1

while (numero <= 10) {
  if (numero % 5 === 0) {
    console.log(`O primeiro número múltiplo de 5 entre 1 a 20 é ${numero}`)
    break
  }
  numero++
}

//=> exemplo 03: exemplo mais prático

let contadorUsuario = 0

const usuarios: string[] = ['Jansen', 'Jordânia']

while (usuarios[contadorUsuario]) {
  console.log(`Usuários...: ${usuarios[contadorUsuario]}`)
  contadorUsuario++
}

//=> exemplo 04: do...while

let contador_01 = 0

do {
  console.log(contador_01)
  contador_01++
} while (contador_01 < 5);