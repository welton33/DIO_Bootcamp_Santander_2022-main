"use strict";
// Adicionando um tipo para o retorno da função 
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 3));
// o tipo VOID indica que a função não retorna nenhem valor após a sua execução
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
// Função que utiliza o callback que é uma função passada como parâmetro para outra função
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorElemento(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorElemento));
