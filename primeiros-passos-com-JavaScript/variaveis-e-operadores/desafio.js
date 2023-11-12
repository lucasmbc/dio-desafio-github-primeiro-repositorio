const precoCombustivel = 6;
const kmPorLitro = 13;
const distanciaEmKm = 320;

const gastoTotal = distanciaEmKm / kmPorLitro * precoCombustivel;

console.log(`Valor do combustível: R$ ${precoCombustivel.toFixed(2)}\nGasto médio do veículo: ${kmPorLitro}km\nDistância: ${distanciaEmKm}km\nGasto total: R$ ${gastoTotal.toFixed(2)}`);