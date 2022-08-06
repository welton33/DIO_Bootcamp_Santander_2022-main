# Javascript -  Debugging e Error Handling

Projeto realizado no Bootcamp Santander 2022 [Digital Innovation One](https://digitalinnovation.one/).

- Atividade prática sobre o tema estudado.



## 📄 Atividade : Validação de erros por tipo

- Objetivo consiste em criar uma função que receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado. 

- As validações são:
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Aplicado o `try...catch` para informar o erro e fazer se respctivo tratamento
- Como filtro para as chamadas de catch por cada tipo de erro foi empregado o operador `instanceof`

## Material de Apoio

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)

