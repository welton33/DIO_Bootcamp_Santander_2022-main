
// ATIVIDADE 3 - pt.01

// Definindo função que retorna a soma dos números em um array
function somaNumeros(array){

    return array.reduce(function(prev, current){
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

// Array de entrada
const test = [1, 2];

console.log(`------------------somaNumeros-----------------`);
console.log("Soma final:", somaNumeros(test));
console.log(`--------------------------------------------`);
console.log(`\n`);

// -------------------------------------------------------------------------------------------------------------------------------- //

// ATIVIDADE 3 - pt.02

// Definindo lista de compra
const lista = [

    { name: 'Sabão em pó', preco: 30},
    { name: 'Cereal', preco: 12},
    { name: 'Toalha', preco: 30}

]

// Valor Inicial para cálculo
const saldoDisponivel = 100;

// Função que retorna o saldo disponível após abater os valores da lista de compra
function calcularSaldo(saldoDisponivel, lista){

    return lista.reduce(function (prev, current, index) {
        console.log('Rodada:', index + 1, { prev }, { current }); // imprime a posição da verificação, anterior e o atual
        return prev - current.preco; // retorna o valor anterior menos o atual, pegando apenas o atributo preço do objeto
    }, saldoDisponivel) // informa o valor inicial
}

console.log("Saldo restante: R$", calcularSaldo(saldoDisponivel, lista));