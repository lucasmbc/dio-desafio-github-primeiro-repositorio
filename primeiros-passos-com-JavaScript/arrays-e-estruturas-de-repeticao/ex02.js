// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [1, 2, 6, 8, 9, 10, 11, 16, 17, 21, 23, 26, 33, 50];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`O número ${numeros[i]} é par.`);
    } else {
        console.log(`O número ${numeros[i]} é ímpar.`);
    }
}
