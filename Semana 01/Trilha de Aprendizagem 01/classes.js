//Criação de objeto usando class

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
};

let meuCarro = new Carro("Jeep", "Renegade");

console.log(meuCarro.marca + " " + meuCarro.modelo);

//Implementando herança usando classes em JavaScript

//Definindo a classe Animal (classe base)

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Fazendo algum som...");
    }
}

//Definindo a classe cachorro que herda de Animal

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da classe pai (Animal)
        this.raca = raca;
    }

    latir() {
        console.log("Au au!");
    }

    toString() {
        return `${this.nome} é um ${this.raca}`;
    }
}

// Exemplo de uso das classes

let meuCachorro = new Cachorro("Rex", "Labrador");
console.log(meuCachorro.toString());  // Saída: Rex é um labrador

meuCachorro.fazerSom(); // Saída: Fazendo algum som...

meuCachorro.latir(); // Saída: Au au!
