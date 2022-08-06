# Javascript - Orientação a Objetos

Projeto realizado no Bootcamp Santander 2022 [Digital Innovation One](https://digitalinnovation.one/).

- Atividade prática sobre o tema estudado.



## 📄 Atividade : Conta Bancária

- Objetivo consiste em testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

  

  1. Criar a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
  2. Dentro de `ContaBancaria`, construir o getter e o setter de `saldo`;
  3. Dentro de `ContaBancaria`, criar os métodos `sacar` e `depositar`;
  4. Criar uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
  5. Ainda em `ContaCorrente`, construir o getter e o setter de `cartaoCredito`;
  6. Ainda em `ContaCorrente`, fazer com que o `tipo` seja 'conta corrente' por padrão;
  7. Criar uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
  8. Criar uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
  9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**.
  
  
