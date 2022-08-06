
// Atividade de Módulos

function mostraIdade(nome, idade){
    return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade){
    return `A Cidade de ${nome} é ${cidade}`;
}

function mostraHobby(nome, hobby){
    return `O hobby de ${nome} é ${hobby}`;
}

// Exportando as funções para outro arquivo -> main
export { mostraIdade, mostraCidade, mostraHobby };