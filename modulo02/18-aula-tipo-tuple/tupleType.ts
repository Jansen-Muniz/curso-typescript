// => Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number]
pessoa = ['Jansen Muniz', 'Frontend Developer', 33]
console.log(pessoa)

// => Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number]
pessoa1 = ['Jansen Muniz', 'Frontend Developer', 33]
console.log(pessoa1[1])

// => Exemplo 03 - Outra forma de usar Tuplas em TypeScript(com labels)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Jansen Muniz', 'Frontend Developer', 33]
console.log(pessoa2)

// => Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(...listaFrutas)

// => Exemplo 05 - Lista Heterogênea de Tupla
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(listaFrutas2)

// => Exemplo 06 - Uso de Tuplas em funções

function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades]
}

let resultado = listarPessoas(['Jansen', 'Jordânia'], [33, 33])
console.log(resultado)

// => Exemplo 07 - Labeled Tuples com spread operator numa função

type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}

console.log(criarPessoa('Jansen', 'Muniz'))
console.log(criarPessoa('José Jansen', 'Muniz', 'de Almeida'))