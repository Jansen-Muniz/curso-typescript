export { }

//Exemplo 01 - Modificador: public
class Estudante {
  codigoEstudante: number
  nomeEstudante: string
}

const estudante = new Estudante()
estudante.codigoEstudante = 123
estudante.nomeEstudante = 'Jansen Muniz'

console.log(estudante.nomeEstudante)
console.log(estudante.codigoEstudante)

//Exemplo 02 - Modificador: private

class Estudante_02 {
  codigoEstudante: number
  nomeEstudante: string
  private idade: number

  constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
    this.codigoEstudante = codigoEstudante
    this.nomeEstudante = nomeEstudante
    this.idade = idade
  }

  retornarDadosEstudante() {
    return `
      Código do estudante: ${this.codigoEstudante}
      Nome do estudante: ${this.nomeEstudante}
      Idade do Estudante: ${this.idade}
    `
  }
}

const estudante_02 = new Estudante_02(1010, 'Jansen', 33)

console.log(estudante_02.retornarDadosEstudante())

//Exemplo 03 - Modificador: protected

class Estudante_03 {
  codigoEstudante: number
  protected nomeEstudante: string

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante
    this.nomeEstudante = nomeEstudante
  }
}

class Pessoa extends Estudante_03 {
  private curso: string

  constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
    super(codigoEstudante, nomeEstudante)
    this.curso = curso
  }

  retornarDadosAluno() {
    return `
      Código do estudante: ${this.codigoEstudante}
      Nome do estudante: ${this.nomeEstudante}
      Matéria do Estudante: ${this.curso}
    `
  }
}

const estudante_03 = new Pessoa(1234, 'Jansen', 'Matemática')

console.log(estudante_03.retornarDadosAluno())
