
// Criando variaveis com propriedade e private

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

// Defini que os atributos da Interface Cachorro são apenas de leitura "+" adiciona cada chave com leitura e "-?" remove os atributos opcionais
type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura {
    
    idade;
    nome;
    parqueFavorito;

    // Definindo parâmetros de entrada
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Instanciando o objeto 
const cao = new MeuCachorro('Apolo', 14);

console.log(cao);