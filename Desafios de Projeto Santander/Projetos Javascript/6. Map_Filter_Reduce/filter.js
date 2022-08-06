
// ATIVIDADE 2

// Definindo a função que irá filtrar números pares de um array com o método 'filter'
function filtraPares(array){
    return array.filter(callback);
}

// Função que valida como par
function callback(item){
    return item % 2 === 0;
}

// Array de entrada
const random = [45, 52, 98, 1500, 258, 789]

console.log(filtraPares(random));