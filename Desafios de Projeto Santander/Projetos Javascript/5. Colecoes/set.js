
// ATIVIDADE 02

// Definindo o array com dados
const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

// Defininfo a função que irá preencher um novo array com os valores únicos
function valoresUnicos(array) {

    const mySet = new Set (array); // Definindo um Set

    // Retornando os valores e armazenando em um array com o argumento Rest.
    return [...mySet]; 
}

console.log(valoresUnicos(myArray));