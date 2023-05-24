// => Exemplo 01: Exemplo básico de Type Object

const person = {
  nome: 'Jansen',
  sobrenome: 'Muniz',
  idade: 33,
  funcao: 'Frontend developer'
}

console.log(person)

// => Exemplo 02: object como parâmetro de função(eles podem ser anônimos)

function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vindo ' + funcionario.nome
}

console.log(onboarding01({ nome: 'Jansen Muniz' }))

// => Exemplo 03: object nomeados

interface Pessoa {
  nome: string
  funcao: string
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vindo ' + pessoa.nome + '!' + ' Sua função na empresa será ' + pessoa.funcao + '.'
  )
}

console.log(onboarding02({ nome: 'Jansen Muniz', funcao: 'Frontend Developer' }))

//Exemplo 04: object como type alias

type Pessoa03 = {
  nome: string
  funcao: string
  linguagem: string
}

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vindo ' + pessoa.nome + '!' + ' Sua função na empresa será ' + pessoa.funcao + '.' + ' Você trabalhará com a linguagem ' + pessoa.linguagem + '.'
  )
}

console.log(onboarding03({ nome: 'Jansen Muniz', funcao: 'Frontend Developer', linguagem: 'JavaScript/TypeScript' }))

// => Exemplo 05: usando optional no object

interface Pessoa04 {
  nome: string
  funcao: string
  linguagem: string
  email?: string
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vindo ' + pessoa.nome + '!' + ' Sua função na empresa será ' + pessoa.funcao + '.' + ' Você trabalhará com a linguagem ' + pessoa.linguagem + '.'
  )
}

console.log(onboarding04({ nome: 'Jansen Muniz', funcao: 'Frontend Developer', linguagem: 'JavaScript/TypeScript' }))