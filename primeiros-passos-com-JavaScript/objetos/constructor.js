class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade; 
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
    }
}

const joao = new Pessoa('João da Silva', 38);

const renan = new Pessoa('Renan Rodrigues', 25);

console.log(joao);
console.log(renan);

joao.descrever();
renan.descrever();
