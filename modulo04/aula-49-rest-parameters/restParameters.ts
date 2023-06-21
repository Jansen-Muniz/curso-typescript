// Exemplo 01

function somarNumeros(...numeros: number[]) {
  let total = 0

  numeros.forEach(numero => total += numero)

  return total
}

console.log(somarNumeros(30, 50))
console.log(somarNumeros(70, 30, 50, 30, 20))

// Exemplo 02

function listarFrutas(frase: string, ...frutas: string[]) {
  return frase + ' ' + frutas.join(', ')
}

console.log(
  listarFrutas(
    'Jansen, você precisa ir na feira para comprar...:',
    '🥥',
    '🍓',
    '🍌',
    '🍍',
  ),
);

// Exemplo 03

class Produtos {
  public exibirProdutos(...produtos: string[]): void {
    for (const produto of produtos) {
      console.log(produto)
    }
  }
}

const departamentoInformatica: Produtos = new Produtos()

console.log('Todos os produtos do departamento de informática disponíveis no estoque...:')

departamentoInformatica.exibirProdutos(
  'Mouse', 'Teclado', 'Monitor', 'Webcam', 'Notebook', 'USB'
)
