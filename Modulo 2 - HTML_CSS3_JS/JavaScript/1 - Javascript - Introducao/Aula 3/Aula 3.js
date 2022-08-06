// console.log('Hello world!');

// Declarando a função para verificar números pares
function returnEvenValues(array){

    let evenNums = []; // Variavel auxiliar

    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par!`)
        }
    }

    console.log("Os números pares são:", evenNums);
}

let array = [1, 2, 3, 4, 5, 7, 8]; // Definindo valores do array
returnEvenValues(array); // chamando a função para os valores