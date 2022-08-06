// Generic types 

// O parâmetro T indica que tipo de algo que vai receber desconhecido, com isso ao passar os valores da função ele infere o tipo de acordo com o que ele receber.
function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
    // return array.map(() => valor);
}

console.log(adicionaApendiceALista([1,2,3],2));

