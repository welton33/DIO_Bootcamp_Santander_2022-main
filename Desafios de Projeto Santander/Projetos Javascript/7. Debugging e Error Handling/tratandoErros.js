
// Definindo função que recebe um array e um numero e realiza validações
function validarArray(array, num) {

    // Verifica se algum desses parâmetros ocorre
    try {

        // Verifica senão recebeu nenhuma das variáveis
        if (!array && !num)
            throw new ReferenceError("Envie os parâmetros");

        // Verifica o array se é um objeto
        if (typeof array !== "object")
            throw new TypeError("Array precisa ser do tipo object");

        // Verifica o array se é um número
        if (typeof num !== "number")
            throw new TypeError("Num precisa ser do tipo number");

        // Verifica o array se o retorno de length retorna um número
        if (array.length !== num)
            throw new RangeError("Tamanho inválido");

        return array;

    }

    // Para cada instância ocorrida de erro, uma mensagem é informada como tratativa do erro.
    catch(erro){

        if (erro instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(erro.message);
        }

        else if (erro instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(erro.message);
        }

        else if (erro instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(erro.message);
        }

        else {
            console.log("Tipo de erro não esperado:" + erro);
        }

    }
}

console.log(validarArray()); // ReferenceError
console.log(validarArray(5,5)); // TypeError array !== "object"
console.log(validarArray([],"a")); // TypeError num !== "number"
console.log(validarArray([1,2,3,4,5],2)); // RangeError

console.log(validarArray([1,2,3,4,5],5)); // sucesso