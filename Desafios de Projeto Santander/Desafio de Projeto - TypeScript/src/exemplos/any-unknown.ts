
// unknown é necessário você checar seu tipo por meio de condicionais validando-o, mesmo que o recebimento seja desconhecido.

// É uma boa prática, mas pouco utilizado

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;


let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'agora vai';

let stringTest2: string = 'agora vai';

if (typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}

// Tipo never e o comando Throw

// never indica um código que foi interrompido e nunca terminou

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);