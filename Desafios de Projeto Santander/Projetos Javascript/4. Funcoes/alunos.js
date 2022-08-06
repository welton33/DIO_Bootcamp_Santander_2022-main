
//ATIVIDADE 1

// Definindo os objetos alunos
const alunos = [

    { nome: 'João', nota: 5, turma: '1B', },

    { nome: 'Sofia', nota: 9, turma: '1B', },

    { nome: 'Paulo', nota: 6, turma: '2C', },

    { nome: 'Miguel', nota: 3, turma: '2C', },
];


// Definindo a função que irá receber o array de alunos e suas médias
function alunosAprovados(array, media){

    // Array auxiliar
    let aprovados = [];

    // Percorrendo o array alunos
    for (let i = 0; i < array.length; i++){

        // Definindo quais propriedades irá usar com "Object Destructuring"
        const {nota, nome} = array[i];

        // Validando cada aluno
        if(nota >= media){
            // aprovados.push(nome);
            aprovados.push(`Aluno: ${nome}, nota: ${nota}`);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,5));