// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Reposta

// Definindo uma interface com os atributos
interface Funcionario { nome: string; codigo: number; }

//Criando um objeto
const funcionario1: Funcionario = {
    nome: "José Henrique",
    codigo: 254
}

console.log(funcionario1); // as propriedades dentro do objeto 
console.log({funcionario1}); // identificado o objeto e impresso as propriedades dentro dele

