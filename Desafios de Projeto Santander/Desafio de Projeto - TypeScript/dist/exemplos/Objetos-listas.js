"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: "André",
    idade: 25,
    profissao: 'Pintor'
};
const paulo = {
    nome: "Paulo",
    idade: 25,
    profissao: 'Desenvolvedor'
};
// enum estabelece o nome de variaveis como constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profisssao: Profissao.Desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 23,
    profisssao: Profissao.Desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 28,
    profisssao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: "Mônica",
    idade: 24,
    materias: ['Matemática discreta', 'programação']
};
// Função que retorna a lista de um conjunto de elementos
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
