
// ATIVIDADE 2

// Definindo a função que irá calcular a idade daqui X anos
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

// Definindo os objetos
const pessoa1 = { nome: 'Maria', idade: 30 }
const pessoa2 = { nome: 'Carla', idade: 26 }
const animal = { nome: 'Fiona', idade: 5, raca: 'Pug' }

// Utilizando o Call
console.log("----------Utilizando o CALL----------");
console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.call(animal,20));
console.log("----------------------------------------" + "\n");

// Utilizando o Apply
console.log("----------Utilizando o Apply----------");
console.log(calculaIdade.apply(pessoa2, [30]));
console.log(calculaIdade.apply(animal,[20]));
console.log("----------------------------------------" + "\n");