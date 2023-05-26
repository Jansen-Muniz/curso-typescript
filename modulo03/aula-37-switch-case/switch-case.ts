// exemplo 01 - uso de switch...case

let flor = 'tulipa'

switch (flor) {
  case 'rosa':
    console.log('Rosas são vermelhas')
    break
  case 'violeta':
    console.log('Violetas são azuis')
    break
  case 'tulipa':
    console.log('Tulipas são brancas')
    break
  default:
    console.log('Por favor, selecione uma outra flor!')
}

// exemplo 02 - uso de switch...case

let diaUtilSemana = 6

switch (diaUtilSemana) {
  case 0:
    console.log('domingo')
    break
  case 1:
    console.log('segunda')
    break
  case 2:
    console.log('terça')
    break
  case 3:
    console.log('quarta')
    break
  case 4:
    console.log('quinta')
    break
  case 5:
    console.log('sexta')
    break
  default:
    console.log('Não é um dia útil')
}