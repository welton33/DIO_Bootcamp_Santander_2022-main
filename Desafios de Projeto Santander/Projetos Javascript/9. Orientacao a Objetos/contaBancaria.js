
// Definindo Classe Pai 
class ContaBancaria {

    // Definindo os parâmetros de entrada 
    constructor(agencia, numero, tipo) {

        // Os 'this' sempre apontam para o objeto da classe
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    // Verifica o saldo disponível
    get saldo() {
        return this._saldo;
    }

    // Atribui o valor para o saldo em conta
    set saldo(valor) {
        this._saldo = valor;
    }

    // Método que subtrai valor do saldo
    sacar(valor) {

        if (valor > this._saldo) {
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    // Método que adiciona valor ao saldo
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

// Definindo Classe filha ContaCorrente que herda atributos e métodos da classe ContaBancaria
class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero); // herda atributos 
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

// Definindo Classe filha ContaPoupanca que herda atributos e métodos da classe ContaBancaria
class ContaPoupanca extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero); // herda atributos 
        this.tipo = "poupança";
    }
}

// Definindo Classe filha ContaUniversitaria que herda atributos e métodos da classe ContaBancaria
class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero); // herda atributos 
        this.tipo = "universitária";
    }

    // Sobreescreve o método de ContaBancaria
    sacar(valor) {

        if (valor > 500) {
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
    }
}

// ------------------------------------------Exercitando----------------------------------------------------- //

// Script rodado no console do Navegador a partir do index.html

// const minhaConta = new ContaCorrente(1,123,true)
    // undefined
// minhaConta.saldo
    // 0
// minhaConta.depositar(1000)
    // 1000
// minhaConta.saldo
    // 1000
// minhaConta.sacar(500)
    // 500
// minhaConta.saldo
    // 500
// minhaConta.sacar(600)
    // 'Operação negada!'

// const contaPop = new ContaPoupanca(1,33)
    // undefined
// const contaUniv = new ContaUniversitaria(1,55)
    // undefined
// contaUniv.saldo
    // 0
// contaUniv.depositar(1000)
    // 1000
// contaUniv.saldo
    // 1000
// contaUniv.sacar(500)
    // undefined
// contaUniv._saldo
    // 500
// contaUniv.sacar(550)
    // 'Operação negada!'

// ------------------------------------------Exercitando----------------------------------------------------- //