# Javascript - Funções

Projeto realizado no Bootcamp Santander 2022 [Digital Innovation One](https://digitalinnovation.one/).

- Atividades práticas sobre o tema estudado.



## 📄 Atividade 1: Alunos Aprovados

- Objetivo consiste em criar um programa que:

1. Receba um array de `alunos` e um número que irá representar a média final;
2. Seja capaz de percorrer o array e preencher um novo array auxiliar apenas com os alunos cujas notas são **maiores** ou **iguais à média final**;
3. Aplicado o  "object destructuring" para manipular as propriedades desejadas de cada aluno.



## 📄 Atividade 2: This

- Objetivo consiste a partir de uma função `calculaIdade`, utilizar os métodos call e apply para modificar o valor de `this`. 

- São criados objetos para consumir o método.

  

  - Função usada para calcular a idade daqui 'x' anos.

  ```
  function calculaIdade(anos) {
  	return `Daqui a ${anos} anos, ${this.nome} terá ${
  		this.idade + anos
  	} anos de idade.`;
  }
  ```



