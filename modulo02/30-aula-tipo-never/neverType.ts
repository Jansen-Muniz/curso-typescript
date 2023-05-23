// => Exemplo 01: Never -Throw Exception

function error(message: string): never {
  throw new Error(message);
}

console.log('Erro de mensagem - 01')

// => Exemplo 02: Never inferido automaticamente

function rejectMessage() {
  return error('Erro de mensagem - 02')
}

console.log(rejectMessage())

// => Exemplo 03: Função que contém loop infinito retorna o tipo 'never'

const loopInfinito = function loop() {
  while (true) {
    console.log('Olá, Developers')
  }
}

//console.log(loopInfinito())

// => Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const algumaCoisaVoid: void = null

const algumaCoisaNever: never = null

console.log(algumaCoisaVoid)
console.log(algumaCoisaNever)
