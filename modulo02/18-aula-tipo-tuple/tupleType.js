"use strict";
// => Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Jansen Muniz', 'Frontend Developer', 33];
console.log(pessoa);
// => Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Jansen Muniz', 'Frontend Developer', 33];
console.log(pessoa1[1]);
// => Exemplo 03 - Outra forma de usar Tuplas em TypeScript(com labels)
let pessoa2 = ['Jansen Muniz', 'Frontend Developer', 33];
console.log(pessoa2);
// => Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// => Exemplo 05 - Lista Heterogênea de Tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// => Exemplo 06 - Uso de Tuplas em funções
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Jansen', 'Jordânia'], [33, 33]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Jansen', 'Muniz'));
console.log(criarPessoa('José Jansen', 'Muniz', 'de Almeida'));
