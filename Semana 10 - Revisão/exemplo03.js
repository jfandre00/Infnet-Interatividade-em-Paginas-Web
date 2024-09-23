// Adicionando a classe caixa ao clicar na div

document.getElementById("caixa").onclick = function() {
    this.classList.add("caixa");
};

// Adicionando / removendo alternadamente a classe corVerde ao clicar no parágrafo

document.querySelector("p").onclick = function() {
    this.classList.toggle("corVerde");
};


