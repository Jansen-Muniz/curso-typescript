//Exemplo 01: Tipo Any

const a: any = 33
const b: any = ['Jansen']
const result = a + b

console.log(result)

//Exemplo 02: Quando o tipo 'any' é inferido implicitamente

let frase
frase = 'Olá, jovem gafanhoto.'

console.log(frase)

// => Exemplo 03: Quando devemos usar o tipo any?

const formulario: { [campoFormulario: string]: any } = {
  nome: 'Jansen',
  sobrenome: 'Muniz',
  idade: 33
}

console.log(formulario)