//exemplo 01 - optional parameters

function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
  console.log('Id Funcionário...', idPessoa, 'Nome...', nome)

  if (email != undefined) console.log('Email...', email)
}

informarDadosPessoa(123, 'Jansen Muniz')
informarDadosPessoa(456, 'Jôrdania Lima', 'jordania@email.com')

//exemplo 02

function mensagemLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString()

  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)')
}

mensagemLog('Atualizar página')
mensagemLog('Usuário(a) logado(a) com sucesso', 123)

//exemplo 03

type Car = {
  marca: string
  anoLanc: number
  motor?: string
}

let car: Car

car = {
  marca: 'Fiat',
  anoLanc: 2013
}

console.log(car)
