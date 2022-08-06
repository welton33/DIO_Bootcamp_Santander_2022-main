
// Exemplo de como usar Omit 

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

// Definindo uma interface com omissão de algum atributo especifico, por subentender que não precisa.
// <> - diamante
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
    nome: "José",
    idade: 25
}