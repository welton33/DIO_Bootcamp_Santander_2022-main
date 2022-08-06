
// ATIVIDADE 01 

// Definindo os objetos
const maca = { value: 2 }
const laranja = { value: 3 }

// Função que multiplica cada elemento de um array pelo valor do objeto com implementaçãp do argumento 'thisArg'
function mapComThis(array, thisArg){

    return array.map(function(item){
        return item * this.value;
    }, thisArg);

}

// Array de entrada
const nums = [1, 2];

console.log(`------------------Com This-----------------`);
console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));
console.log(`--------------------------------------------`);

// Função que multiplica cada elemento de um array sem a  implementaçãp do argumento 'thisArg'
function mapSemThis(array){

    return array.map(function(item){
        return item * 2;
    })
}

// Array de entrada
const nums2 = [2, 4, 6, 8, 10];

console.log(`------------------Sem This-----------------`);
console.log(`Resultado:`, mapSemThis(nums2));
console.log(`Array original:`, (nums2));
console.log(`--------------------------------------------`);