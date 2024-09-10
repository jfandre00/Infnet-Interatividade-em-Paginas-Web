// 1. Criar um array vazio chamado frutas
let frutas = [];

// 2. Adicionar 5 frutas
frutas.push("Manga", "Morango", "Abacaxi", "Uva", "Laranja");

// 3. Adicionar os elementos do array na lista de id lista
let lista = document.getElementById("lista");
for (let i = 0; i < frutas.length; i++) {
  let item = document.createElement("li");
  item.textContent = frutas[i];
  lista.appendChild(item);
};

// 4. Adicionar a classe fundoVerde à lista
lista.classList.add("fundoVerde");

// 5. Adicionar a classe fonteAmarela ao último elemento da lista
lista.lastElementChild.classList.add("fonteAmarela");

// 6. Remover a classe tamanhoMedio da lista;
lista.classList.remove("tamanhoMedio");

// 7. Verificar se existe a classe bordaVermelha e trocar pela bordaRoxa

if (lista.classList.contains("bordaVermelha")) {
  lista.classList.replace("bordaVermelha", "bordaRoxa");
};

// 8. Ao clicar na lista de id lista, faça com que todos os elementos da lista fiquem em negrito. Ao clicar novamente na lista, caso os elementos estejam em negrito, remova o negrito destes elementos.

lista.addEventListener("click", () => {
  let itens = lista.getElementsByTagName("li");
  for (let item of itens) {
    item.classList.toggle("negrito");
  }
})

// 9. Ao clicar em um elemento da lista, verifique se este elemento possui o conteúdo Abacaxi. Caso seja, adicione a cor amarela na cor de fundo do elemento.

lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI" && event.target.textContent === "Abacaxi") {
    event.target.style.backgroundColor = "yellow";
  }
});