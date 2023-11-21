class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
    }
}

const joao = new Pessoa();
joao.nome = 'João da Silva';
joao.idade = 38;

const renan = new Pessoa();
renan.nome = 'Renan Rodrigues';
renan.idade = 25;

console.log(joao);
console.log(renan);

joao.descrever();
renan.descrever();
