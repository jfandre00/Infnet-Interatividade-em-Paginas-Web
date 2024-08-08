//Exercício 1 (mandou somente criar objeto)

let produto = {
    nome: "Camiseta",
    quantidade: 12
};

console.log(produto);

//Exercício 2 - somente criando um objeto

let vinho = {
    ano: 1968,
    marca: "Bandiera"
}

console.log(vinho)

//Exercicio 3 - instanciando um objeto (instanciar é criar uma cópia -> let vinho = new Vinho();)- criando um objeto a partir de uma classe já existente (Vinho)

// sempre para instanciar é utilizada a palavra reservada new.

class Vinho {
    constructor() {
        this.ano = 1968;
        this.marca = 'Bandiera';
    }

    envelhecer() {
        return "Envelhecendo"
    }
}

let novo_vinho = new Vinho();

console.log(novo_vinho)

console.log(novo_vinho.envelhecer())