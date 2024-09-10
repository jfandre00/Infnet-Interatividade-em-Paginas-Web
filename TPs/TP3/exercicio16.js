//Adicione um event listener de click no elemento ul id=lista. Ao clicar neste elemento ul, mude o conteudo do elemento li de texto Acre, para o texto Amapá, e sua cor de fundo para azul. Utilize o innerText oara alterar o conteudo do elemento li.


/* // Seleciona o elemento ul com id "lista"
const lista = document.getElementById("lista");

// Adiciona o event listener de click
lista.addEventListener("click", function() {
  // Seleciona o elemento li que tem o texto "Acre"
  const liAcre = Array.from(lista.getElementsByTagName("li")).find(li => li.innerText === "Acre");

  if (liAcre) {
    // Altera o conteúdo do li para "Amapá"
    liAcre.innerText = "Amapá";

    // Muda a cor de fundo para azul
    liAcre.style.backgroundColor = "blue";
  }
});
 */


// Seleciona o elemento ul com id "lista"
const lista = document.getElementById("lista");

// Adiciona o event listener de click
lista.addEventListener("click", function() {
  // Seleciona todos os elementos li dentro da ul
  const itens = lista.querySelectorAll('li');

  // Loop através de todos os itens da lista
  itens.forEach(function(item) {
    // Verifica se o item tem o texto "Acre"
    if (item.innerText === "Acre") {
      // Altera o conteúdo do li para "Amapá"
      item.innerText = "Amapá";

      // Muda a cor de fundo para azul
      item.style.backgroundColor = "blue";
    }
  });
});