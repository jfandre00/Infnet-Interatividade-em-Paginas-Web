//Criação de objetos com outros objetos como atributo.

//Definindo a classe Cliente

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    toString() {
    return `${this.nome} (${this.cpf})`
    }
}

//Definindo a classe ContaBancaria que possui um Cliente

class ContaBancaria {
    constructor(numero, saldoInicial, cliente) {
        this.numero = numero;
        this.saldo = saldoInicial;
        this.cliente = cliente; // Cliente é um atributo de ContaBancaria
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    toString() {
        return `Conta ${this.numero}, Cliente: ${this.cliente}, Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

//Exemplo de uso das classes
let cliente1 = new Cliente("André Ferreira", "222.333.000-99");
let conta1 = new ContaBancaria("001", 100,  cliente1);

console.log(conta1.toString()); // Saída: Conta 001, Cliente: André Ferreira (222.333.000-99), Saldo: R$ 100.00

conta1.depositar(500); // Saída Depósito de R$ 500.00 realizado. Novo saldo: R$ 600.00

conta1.sacar(200); // Saída Saque de R$ 200.00 realizado. Novo saldo: R$ 400.00

console.log(conta1.toString()); // Saída Conta 001, Cliente: André Ferreira (222.333.000-99), Saldo: R$ 400.00