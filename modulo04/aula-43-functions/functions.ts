// => Exemplo 01: Functions(Named Functions)

function somarNumeros(num1: number, num2: number): number {
  return num1 + num2
}

const resultFunc = somarNumeros(2, 2)

console.log(resultFunc)

// => Exemplo 02: Função anônima(Function Expression)

const saudar = function (mensagem: string) {
  return mensagem
}

console.log(saudar('Olá, developers!'))

// => Exemplo 03: (Arrow Function Expression)

const saudar03 = (mensagem: string) => {
  return mensagem
}

console.log(saudar03('Fala, pessoal!'))

// => Exemplo 04: (Function Constructor)

const saudar04 = new Function('mensagem', 'return "Fala " + mensagem')

console.log(saudar04('Galera!'))