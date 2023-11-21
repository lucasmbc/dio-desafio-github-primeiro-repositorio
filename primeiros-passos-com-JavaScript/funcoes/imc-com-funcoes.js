function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
};

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso!';
    } else if (imc < 25) {
        return 'Peso Normal!';
    } else if (imc < 30) {
        return 'Acima do peso!';
    } else if (imc < 40) {
        return 'Obeso!';
    } else {
        return 'Obesidade Grave!';
    }
}

// Função imediatamente invocada
(function () {
    const imc = calcularImc(90, 1.85);
    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));
})();
