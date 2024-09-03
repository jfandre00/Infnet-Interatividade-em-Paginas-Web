//1. Adicione a classe hide na <div> de id = “modal”
document.getElementById("modal").classList.add("hide");




//3. Clique no botão da tag <button>
//4. Ao clicar no botão chame uma função, que faça aparecer a "modal" na tela
document.querySelector("button").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("hide");
});

//5. Ao clicar na imagem de id = “close”, faça a "modal" desaparecer novamente
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("modal").classList.add("hide");
});

