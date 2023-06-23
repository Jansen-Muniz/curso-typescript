// Exemplo 01 - Classes

export { }

class Pessoa {
  nome: string
  sobrenome: string

  constructor(nome: string, sobrenome: string) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }
}

const pessoa = new Pessoa('Jansen', 'Muniz')

console.log(pessoa.nomeCompleto())

// Exemplo 02 - Sem constructor

class Estudante {
  codigoEstudante: number
  nomeEstudante: string
}

//Criar um objeto ou a instância
const estudante = new Estudante()

//Inicializar o objeto
estudante.codigoEstudante = 1234
estudante.nomeEstudante = 'Jansen Muniz'

//Acessar campos
console.log('Código do estudante...: ' + estudante.codigoEstudante)
console.log('Nome do estudante...: ' + estudante.nomeEstudante)

// Exemplo 03 - Classes com constructor

class Estudante_1 {
  nomeEstudante: string
  codigoEstudante: number

  //Definir o construtor
  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.nomeEstudante = nomeEstudante
    this.codigoEstudante = codigoEstudante
  }

  listarEstudante(): void {
    console.log('Código de estudante...: ', + this.codigoEstudante)
    console.log('Nome do estudante...:', + this.nomeEstudante)
  }
}

//Acessar os campos
const estudante_1 = new Estudante_1(1001, 'Jansen Muniz')
console.log('Lendo o atributo código do estudante...:' + estudante_1.codigoEstudante)
console.log('Lendo o atributo nome do estudante...:' + estudante_1.nomeEstudante)
