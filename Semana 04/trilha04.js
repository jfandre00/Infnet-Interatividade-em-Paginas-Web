document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

let elemento = document.getElementById("myBtn2");
elemento.addEventListener("click", alerta);

function alerta() {
    alert("Olá, Mundo!");
}

const titulo = document.getElementById("titulo");
titulo.addEventListener("click", function() {
    alert('O Título foi clicado!');
});

titulo.addEventListener("mouseover", function() {
    titulo.style.color = 'blue';
});

titulo.addEventListener("mouseout", function() {
    titulo.style.color = 'black';
});

const para = document.createElement("p");
const node = document.createTextNode("Este é o novo parágrafo.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

const child = document.getElementById("p1");
element.insertBefore(para, child);

const parent = document.getElementById("div1");
parent.removeChild(child);

const botao = document.getElementById("adicionar");
const container = document.getElementById("container");

botao.addEventListener('click', adicionaParagrafo)

function adicionaParagrafo() {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Este é um novo parágrafo adicionado dinamicamente!';

    container.appendChild(novoParagrafo);
}

const bAdicionar = document.getElementById('adicionarTabela');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

bAdicionar.addEventListener('click', adicionarDados);

function adicionarDados() {
    const valor1 = document.getElementById('input1').value.trim();
    const valor2 = document.getElementById('input2').value.trim();

    if (valor1 !== "" && valor2 !== "") {

        const tabela = document.getElementById('tabela');
        
        const novaLinha = tabela.insertRow();

        const celula1 = novaLinha.insertCell(0);
        const celula2 = novaLinha.insertCell(1);
        celula1.textContent = valor1;
        celula2.textContent = valor2;

        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        
    } else {
        alert("Por favor, preencha ambos os campos antes de adicionar à tabela.")
    }
}