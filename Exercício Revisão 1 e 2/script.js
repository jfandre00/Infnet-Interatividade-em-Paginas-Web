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

// Exercício 04

let nomeEmpresa = "ADZ Construction Co";
let anoFundacao = 2025;

let empresa = {
    nomeEmpresa,
    anoFundacao
}

console.log(empresa);

class Empresa{
    constructor(n, f)
    {
        this.nome = n;
        this.ano = f;
        this.nomePresidente = "José";
        this.numeroFuncionarios = 100; //Exercício 05
        this.telefone = "11-98765-4232";
    }

    obterPresidente() { //Exercício 6
        return this.nomePresidente;
    }
}

let empresa2 = new Empresa("Alfa Beta Gama", 2001);
console.log(empresa2);

console.log(empresa2.obterPresidente());

//Exercício 7

delete empresa2.ano;

console.log(empresa2);


//Exercício 8

class Funcionario{
    constructor(n, ht, vlr)
    {
        this.nome = n;
        this.horasTrabalhadas = ht;
        this.valorHora = vlr;
    }

    calcularGanho()
    {
        return this.horasTrabalhadas * this.valorHora;
    }
}

let f = new Funcionario("Maria", 100, 200);

console.log(f);
console.log(f.calcularGanho())


//Exercicio 9

let imagem = document.querySelector("img");

imagem.setAttribute("title", "Imagem HTML5");

//Exercício 10

let link = document.querySelector("a");
link.removeAttribute("target");

//Exercício 11

let elemento = document.getElementById("box");

elemento.style.border = "2px solid red";
elemento.style.backgroundColor = "green";

//Exercício 12

let pais = {
    nome: "Brasil",
    anoIndependencia: 1822,

    presidente: {
        nome: "Lula",
        idade: 70
    }
}

console.log(pais);

// Exercício 13

let lado = parseFloat(prompt("Digite o lado do quadrado"));

let quadrado = {
    lado: lado,
    perimetro: function() {
        return this.lado * 4;
    },

    area: function() {
        return this.lado * this.lado;
    }
}

console.log(`Perímetro: ${quadrado.perimetro()}`);
console.log(`Área: ${quadrado.area()}`);

// Exercício 14

let linka = document.getElementById("link");

if (linka.getAttribute("href") != "https://www.w3school.s.com/") {
    linka.setAttribute("href", "https://www.w3schools.com/");
}

// Exercício 15

function trocarImagem() {
    let imagem = document.querySelector("img");
    imagem.setAttribute("src", "javascript.png");
}