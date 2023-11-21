/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este precurso.
*/

class Carros {
    marca; 
    cor;
    autonomia;
    
    constructor(marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        const valorGasto = (distancia / this.autonomia) * precoCombustivel;
        return valorGasto.toFixed(2)
    }
}

const uno = new Carros('uno', 'cinza', 15);
const distancia = 320;
const valorCombustivel = 6;

console.log(uno);
console.log(`Veículo: ${uno.marca}\nDistância: ${distancia}km\nValor da gasolina: R$ ${valorCombustivel.toFixed(2)}\nTotal: R$ ${uno.calcularGastoDePercurso(distancia, valorCombustivel)}`);
