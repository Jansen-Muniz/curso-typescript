//Exemplo 01 - Default parameters

function descontoCompra(preco: number, desconto = 0.08) {
  return preco * (1 - desconto)
}

console.log(descontoCompra(100))
//Exemplo

function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
  return saudar + ' ' + mensagem
}

console.log(exibirMensagem('JavaScript Developers'))

//Exemplo

function exibirNome(nome: string, sobrenome = 'Muniz') {
  return nome + ' ' + sobrenome
}

const result_1 = exibirNome('Jansen')
console.log(result_1)

const result_2 = exibirNome('Jansen', undefined)
console.log(result_2)

const result_3 = exibirNome('Jordania', 'Lima Costa')
console.log(result_3)