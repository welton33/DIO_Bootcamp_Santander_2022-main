// interfaces: são contratos para implementar suas classes.
// types: são usados para juntar interfaces.

// Interface principal
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    // executarRugido(alturaEmDecibeis: number): void;
}

// Herdando 
interface Ifelino extends IAnimal {
    visaoNoturna: boolean;
}

// Herdando
interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

// Criando um objeto 
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: true
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

// Criando um objeto com herança
const felino: Ifelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: true
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

// Juntando interfaces podendo implementar ambos ou não
type IDomestico = Ifelino | ICanino; 

const animal2: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}

// console.log(animal.executarRugido(2)); 

// console.log("Domestico:" + animal2.domestico + " " + "Nome:" + animal2.porte + " " + "Porte:" + animal2.porte + " " + "Tipo:" + animal2.tipo); 