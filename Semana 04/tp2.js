function chamaAlerta() {
    alert("Cliquei");
}

let elemento = document.getElementById("card");
//elemento.setAttribute("class", "card");

elemento.className = "card";

function trocaCor() {
    let titulo = document.querySelector("h1");
    
    titulo.classList.toggle("corVermelha"); // esse método alterna entre o nome de classe a cada vez que há um click

    
}

function chamaTexto() {
    let elemento2 = document.querySelector("h1 + p");
    
    //elemento2.classList.toggle("texto"); //aqui vai alternar sempre que clicar no botão

    elemento2.classList.add("texto"); //aqui o que foi pedido pelo exercício, ao clicar no botão adiciona a classe.
}

function alteraH1() {
    let h1 = document.querySelector("button + h1");
    h1.classList.toggle("titulo");
}

function trocaClasse() {
    let elemento4 = document.getElementById("item1");
    let pai = elemento4.parentNode;

    pai.classList.toggle("lista2");
}