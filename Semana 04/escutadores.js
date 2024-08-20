//document.getElementById("myH1").onclick = mostraTexto

document.getElementById("myH1").addEventListener("click", mostraTexto)

document.getElementById("myH1").addEventListener("click", exibeData)

document.getElementById("myH1").addEventListener("click", exibeP3)

document.getElementById("myH1").addEventListener("mouseover", alteraCor);

document.getElementById("myH1").addEventListener("mouseout", trocarCor);

function trocarCor() {
    let titulo = document.getElementById("myH1");
    titulo.style.color = 'green';
}

function alteraCor() {
    let titulo = document.getElementById("myH1");
    titulo.style.color = 'blue';    
}

function mostraTexto() {
    let paragrafo = document.getElementById("p1");
    paragrafo.innerHTML = 'Aparece Texto';
}


function exibeData() {
    let para = document.getElementById("p2");
    para.innerHTML = Date();
}

function exibeP3() {
    let para = document.getElementById("p3");
    para.innerHTML = "Funciona P3";
}

document.getElementById("myBtn").onclick = displayDate;
document.getElementById("myBtn").addEventListener("click", alerta);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function alerta() {
    alert("Funciona");
}

let paragrafo = document.createElement("p");
paragrafo.setAttribute("id", "nomeparagrafo");

let node = document.createTextNode("Este é o novo parágrafo.");
paragrafo.appendChild(node);
let element = document.getElementById("div1");
//element.appendChild(paragrafo);


const child = document.getElementById("pa2");
element.insertBefore(paragrafo, child);

document.getElementById("nomeparagrafo").style.color = 'red';

const parent = document.getElementById("div1");
parent.removeChild(child);
//acima removemos o parágrafo 2

let botao = document.getElementById('adicionar');
let container = document.getElementById('container');
botao.addEventListener('click', adicionaParagrafo)

function adicionaParagrafo() {
    let novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Este é um novo parágrafo adicionado dinamicamente';
    container.appendChild(novoParagrafo);
}