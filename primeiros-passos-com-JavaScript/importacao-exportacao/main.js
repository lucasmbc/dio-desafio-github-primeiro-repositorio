// Object Destruturing
const { gets, print } = require('./funcoes-auxiliares');

/*
    Uma sala contem 5 alunos e para cada aluno foi soteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const numeros = [5, 50, 10, 98, 23];

let numMaior = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numMaior) {
        numMaior = numeros[i]
    }
}

print(numMaior);
