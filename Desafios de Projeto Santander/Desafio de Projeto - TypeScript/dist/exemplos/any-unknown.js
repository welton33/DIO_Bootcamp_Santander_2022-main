"use strict";
// unknown é necessário você checar seu tipo por meio de condicionais validando-o, mesmo que o recebimento seja desconhecido.
// É uma boa prática, mas pouco utilizado
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'agora vai';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
// Tipo never e o comando Throw
// never indica um código que foi interrompido e nunca terminou
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
