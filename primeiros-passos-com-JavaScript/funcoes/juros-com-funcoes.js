function calculaDesconto(precoEtiqueta, formaDePagamento) {
    if (formaDePagamento === 1) {
        return precoEtiqueta * 0.90;
    } else if (formaDePagamento === 2) {
        return precoEtiqueta * 0.85
    } else if (formaDePagamento === 3) {
        return precoEtiqueta
    }else {
        return precoEtiqueta * 1.10
    }
}

(function () {
    console.log(calculaDesconto(100, 4));
})();
