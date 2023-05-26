// Exemplo 01 - uso do if

const numeroMax = 100
let contador = 100

if (contador < numeroMax) {
  contador++
}

console.log(contador)

// Exemplo 02 - uso do if

const permissaoIdadeDirigir = 18

if (permissaoIdadeDirigir >= 18) {
  console.log('Você está habilitado para dirigir!')
}

// Exemplo 03 - uso do if-else

const permissaoIdadeDirigir01 = 18

if (permissaoIdadeDirigir01 <= 17) {
  console.log('Você está habilitado para dirigir!')
} else {
  console.log('Você está não habilitado para dirigir!')
}

// Exemplo 04 - if...else if

let desconto: number

let valorCompra = 14

if (valorCompra > 0 && valorCompra <= 5) {
  desconto = 5
} else if (valorCompra > 5 && valorCompra <= 10) {
  desconto = 10
} else {
  desconto = 15
}

console.log(`Seu desconto foi de ${desconto}% desconto`)

// Exemplo 05 - ternário (? :) - if...else

const idadeVotacao = 18

const podeVotar = (idadeVotacao >= 18)
  ? 'Você é elegível para votar.'
  : 'Você é não elegível para votar.'

console.log(podeVotar)