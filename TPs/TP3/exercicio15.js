//Adicione um event listener de click ao elemento div id=container. Ao clicar neste elemento div, o conteudo do elemento span, filho do elemento clicado, ira se tornar a palavra teste. Utilize textContent para alterar o conteudo do elemento span.

  // Seleciona o elemento div com id "container"
const container = document.getElementById("container");

// Adiciona o event listener de click
container.addEventListener("click", function() {
  // Seleciona o elemento span, que é o filho do container
  const span = container.querySelector("span");

  // Altera o conteúdo do span para "teste"
  span.textContent = "teste";
});
