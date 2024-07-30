// Criação através de construtor de objetos

function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}

function Venda(id, data, produto) {
    this.id = id;
    this.data = data;
    this.produto = produto;
    this.total = function() {
        return this.produto.preco * this.produto.quantidade;
    };
}

function Carrinho() {
    this.produtos = [];

    this.adicionarProduto = function(produto) {
        this.produtos.push(produto);
    };

    this.removerProduto = function(produto) {
        // Encontrar o índice do produto e removê-lo
        const index = this.produtos.findIndex(p => p.nome === produto.nome);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        }
    };

    this.listarProdutos = function() {
        // Listar os produtos do carrinho
        return this.produtos.map(p => `Produto: ${p.nome}, Preço: ${p.preco}, Quantidade: ${p.quantidade}`).join("\n");
    };
}

let celular = new Produto("iPhone", 2500, 1);
let capa = new Produto("Capa", 200, 1);
let pelicula = new Produto("Pelicula", 50, 4);

let venda01 = new Venda(12345, "2024-10-10", celular);

const meuCarrinho = new Carrinho();

meuCarrinho.adicionarProduto(celular);
meuCarrinho.adicionarProduto(capa);
meuCarrinho.adicionarProduto(pelicula);

console.log(meuCarrinho.listarProdutos());

meuCarrinho.removerProduto(capa);

console.log(meuCarrinho.listarProdutos());