// ATIVIDADE 02

// Definindo função que irá verificar cada ele se é par.
function substituirPares(array){

    if(!array) return -1; // verifica senão é null
    if(!array.length) return -1; // verifica senão é undefined ou empty

    for (let i = 0; i < array.length; i++){

        // se o elemento for 0 
        if (array[i] === 0){
            console.log("Você já é zero");
        }

        // testa se é par e substitui o elemento por 0
        else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array; // retorna o array com as modificações
}

let numeros = [10, 35, 42, 60, 800, 330, 232, 90]; // atribuindo valores para o array
console.log(substituirPares(numeros));
