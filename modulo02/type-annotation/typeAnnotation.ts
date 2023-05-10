// => Variáveis [Type Annotations]
let nome: string = 'Jansen Muniz'
console.log(nome)

// => Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
console.log(animais)

// => Objeto
let carro: {
  nome: string;
  ano: number;
  preco: number
}

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
console.log(carro)

// => Funções

function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2
}

console.log(multiplicarNumeros(2, 5))