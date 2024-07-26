//Criação de forma literal de um objeto produto e venda

let produto = {
    nome: 'Notebook',
    preco: 2500.00,
    quantidade: 1
};

let venda = {
    id: 12345,
    data: '2024-07-20',
    produto: produto, //Estamos incluindo o objeto produto dentro da venda
    total: function() {
        return "R$" + (this.produto.preco * this.produto.quantidade).toFixed(2);
    }
};

console.log(venda.id);
console.log(venda.data);
console.log(venda.produto.nome);
console.log(venda.produto.preco);
console.log(venda.produto.quantidade);
console.log(venda.total());

venda.produto.quantidade = 2;

console.log(venda.produto.quantidade);
console.log(venda.total());


