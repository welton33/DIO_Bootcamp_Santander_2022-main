
// ----------------- SINTAXE E OPERADORES ----------------- //

// -> Atribuição (= += *= /= %=) Ex: x+=y -> x = x+y. Ex: % módulo - retorna resto.
// -> Aritmética (+ - * ** / % ++ -- ) Ex: ** exponencial.
// -> Comparação (== === != !== > < >= <=) Ex: === mesmo valor e tipo.
// -> Lógica (&& || !) Ex: ! "não" lógico.
// -> Condicional (condition) ? expression1 : expression2

// Explicações de Operadores
// function comparaNumeros(num1,num2){
//     const saoIguais = num1 === num2; // Valor booleano
//     const soma = num1 + num2;
//     if(saoIguais){
//         return "São iguais";
//     }
//     return "Não são iguais" // Representa o Else
//     return saoIguais ? "São iguais" : "Não são iguais"
// }

// ------------------------------------------------------- //

// --------------------------------------------------------------------------------------------------------------------- //

/* Definindo a função que irá gerar as frases */ 
function comparaNumeros(num1,num2){

    /* Verifica senão são números negativos ou se algum não foi informado */
    if((num1<0 || num2<0) || (num1==undefined || num2==undefined))
        return 'Defina dois números'; // Imprime no console.

    /* Variaveis que resultam na frase completa */
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiraFrase}${segundaFrase}`; // Frase final.
}

/* Definindo a função que irá testar a igualdade dos números e retorna a frase resultado */
function criaPrimeiraFrase(num1,num2){

    let saoIguais = ""; // Inicializa vazia.

    if(num1 !== num2){
        saoIguais = 'não';
    }

    // frase retornada
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`; 
}

/* Definindo a função que irá somar e testar o resultado com comparação >10 e >20 */
function criaSegundaFrase(num1,num2){

    // Defini as constantes para simplificar o código
    const soma = num1 + num2;
    const compara10 = soma > 10; // retorna true or false
    const compara20 = soma > 20; // retorna true or false

    // Inicializa como menor.
    let resultado10 = 'menor'; 
    let resultado20 = 'menor';

    if(compara10){  
        resultado10 = 'maior'; // em caso de true
    }

    if(compara20){
        resultado20 = 'maior'; // em caso de true
    }

    // frase retornada
    return `. Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;

}

// Habilita o console e faz a chamada da função
console.log(comparaNumeros())

// --------------------------------------------------------------------------------------------------------------------- //