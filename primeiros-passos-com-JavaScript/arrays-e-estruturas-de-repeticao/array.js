const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let total = 0;

for (let i = 0; i < notas.length; i++) {
    total += notas[i];
    
}

console.log(`A média dos alunos é ${total / notas.length}`);
