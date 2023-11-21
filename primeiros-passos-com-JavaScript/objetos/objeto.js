// Objeto em javascript é uma estrutura dinâmica de chave e valor
const pessoa = {
    nome: 'João da Silva',
    idade: 22,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
    }
};

pessoa.altura = 1.80;

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa);
pessoa.descrever()