// ATIVIDADE 01 

// Solução 1
function verificaPalindromo(string) {

    // Verifica se a string é válida diferente de: empty, null and undefined
    if (!string) return "string inexistente";

    // Separa as letras, inverte e junta novamente
    // return string.split("").reverse().join("") === string;
    return `Sua String: ${string} é igual ${string.split("").reverse().join("") === string}`

}

// let myVar;
// console.log(verificaPalindromo("ama"));

// Solução 2
function verificaPalindromo2(string) {

    // Verifica se a string é válida diferente de: empty, null and undefined
    if (!string) return "string inexistente";

    // Verifica dos caracteres por passada inicio e fim
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    // return true;
    return `Sua String: ${string} é igual ${true}`

}

console.log(verificaPalindromo2("ovo"));


