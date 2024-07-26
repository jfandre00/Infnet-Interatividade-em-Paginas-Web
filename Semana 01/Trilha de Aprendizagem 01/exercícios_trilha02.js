//Criação através de construtor de objetos

function Produto(nome, preco, quantidade) 
    {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    };

function Venda (id, data, produto)
    {
        this.id = id;
        this.data = data;
        this.produto = produto;
        this.total = function() {
            return this.produto.preco * this.produto.quantidade;
        }  
    };

let celular = new Produto("iPhone", 2500, 1);

console.log(celular.preco);

let venda01 = new Venda(12345, "2024-10-10", celular);
console.log(celular);
console.log(venda01.id);
console.log(venda01.produto);
console.log(venda01.produto.preco);
console.log(venda01.data);
console.log(venda01.total())