// exemplo 01: loop for

for (let i = 0; i < 10; i++) {
  console.log(i)
}

//exemplo 02: for...of - (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros = [10, 20, 30, 40, 50]

for (const i of arrayNumeros) {
  console.log(i)
}

//exemplo 03: for...of - (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros_01 = [5, 4, 3, 2, 1, 0]

for (const i in arrayNumeros_01) {
  console.log(i)
}

// sort()

const ordemNumerica: number[] = arrayNumeros_01.sort()

console.log(ordemNumerica)