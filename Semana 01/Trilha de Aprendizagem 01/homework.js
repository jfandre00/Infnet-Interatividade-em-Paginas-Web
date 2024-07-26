//Definindo a classe Produto

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    toString() {
        return `O nome é ${this.nome}, seu preço é R$ ${this.preco.toFixed(2)} e a quantidade é ${this.quantidade}.`;
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(nomeProduto) {
        this.produtos = this.produtos.filter(produto => produto.nome !== nomeProduto);
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    }
}

let produto01 = new Produto("Teclado", 25, 10);
let produto02 = new Produto("Mouse", 20, 5);
let produto03 = new Produto("Webcam", 10, 10);

let carrinho01 =  new Carrinho()
carrinho01.adicionarProduto(produto01);
carrinho01.adicionarProduto(produto02);
carrinho01.adicionarProduto(produto03);

console.log(carrinho01)

console.log(carrinho01.calcularTotal())

carrinho01.removerProduto("Teclado");

console.log(carrinho01)

console.log(carrinho01.calcularTotal());



console.log(produto01)
console.log(produto01.toString())


class Venda {
    constructor(id, data, carrinho) {
        this.id = id;
        this.data = data;
        this.carrinho = carrinho;
    }

    gerarRecibo() {
        let recibo = `ID da Venda: ${this.id}\nData: ${this.data}\n`;
        this.carrinho.produtos.forEach(produto => {
            recibo += `Produto: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}\n`;
        });
        recibo += `Total: R$${this.carrinho.calcularTotal().toFixed(2)}`;
        return recibo;
    }
}

let venda01 = new Venda(12345, "10-10-2024", carrinho01);

console.log(venda01)
console.log(venda01.gerarRecibo());