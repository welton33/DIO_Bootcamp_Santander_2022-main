
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: 'Pintor'
}

const paulo: {nome: string, idade: number, profissao: string} = {
    nome: "Paulo",
    idade: 25,
    profissao: 'Desenvolvedor'
}

// enum estabelece o nome de variaveis como constantes
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string;
    idade: number;
    profisssao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[];
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23, 
    profisssao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 23, 
    profisssao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profisssao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: "Mônica",
    idade: 24,
    materias: ['Matemática discreta', 'programação']
}

// Função que retorna a lista de um conjunto de elementos
function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);