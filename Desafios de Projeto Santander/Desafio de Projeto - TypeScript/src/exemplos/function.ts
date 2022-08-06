
// Adicionando um tipo para o retorno da função 

function somarValoresNumericos(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1,3));

// o tipo VOID indica que a função não retorna nenhem valor após a sua execução

function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

// Função que utiliza o callback que é uma função passada como parâmetro para outra função

function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorElemento(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1,3, aoQuadrado));
console.log(somarValoresNumericosETratar(1,3, dividirPorElemento));