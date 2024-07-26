function adicionarProduto() {
    const nome = document.getElementById('nomeProduto').value;
    const preco = parseFloat(document.getElementById('precoProduto').value);
    const quantidade = parseInt(document.getElementById('quantidadeProduto').value);

    if (nome && !isNaN(preco) && !isNaN(quantidade)) {
        const produto = new Produto(nome, preco, quantidade);
        carrinho.adicionarProduto(produto);
        atualizarListaProdutos();
        limparFormulario();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function atualizarListaProdutos() {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    carrinho.produtos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = produto.toString();

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerProduto(produto.nome);

        li.appendChild(btnRemover);
        listaProdutos.appendChild(li);
    });
}

function limparFormulario() {
    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoProduto').value = '';
    document.getElementById('quantidadeProduto').value = '';
}

function removerProduto(nome) {
    carrinho.removerProduto(nome);
    atualizarListaProdutos();
    limparRecibo();
}

function limparRecibo() {
    document.getElementById('recibo').textContent = '';
}

function gerarRecibo() {
    const idVenda = Math.floor(10000 + Math.random() * 90000); // número aleatório de 5 dígitos
    const venda = new Venda(idVenda, new Date().toLocaleDateString(), carrinho);
    const recibo = venda.gerarRecibo();
    document.getElementById('recibo').textContent = recibo;
}


class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    toString() {
        return `${this.quantidade} unidades de ${this.nome} a R$ ${this.preco.toFixed(2)}/unidade. Sub-total: R$ ${(this.preco*this.quantidade).toFixed(2)} `;
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

let carrinho = new Carrinho();
