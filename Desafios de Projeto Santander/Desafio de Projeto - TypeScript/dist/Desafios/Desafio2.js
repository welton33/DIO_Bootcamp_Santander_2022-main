"use strict";
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
// Reposta
// Definido para padronizar a forma que o nome é informado evitando erros
var Funcao;
(function (Funcao) {
    Funcao[Funcao["Atriz"] = 0] = "Atriz";
    Funcao[Funcao["Padeiro"] = 1] = "Padeiro";
})(Funcao || (Funcao = {}));
;
// Criando os objetos
let pessoa1 = { nome: "maria", idade: 29, profissao: Funcao.Atriz };
let pessoa2 = { nome: "roberto", idade: 19, profissao: Funcao.Padeiro };
let pessoa3 = { nome: "laura", idade: 32, profissao: Funcao.Atriz };
let pessoa4 = { nome: "carlos", idade: 19, profissao: Funcao.Padeiro };
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
