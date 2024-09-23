// Em javaScript
let itensLista = document.querySelectorAll("ul li");
// Itera sobre cada item da lista e adiciona o evento de clique
itensLista.forEach(function (item) {
 item.onclick = function () {
 let ulParent = this.parentNode; // Acessa o elemento pai "ul"
 // Verifica se o elemento "li" possui a classe "corVermelha"
 if (this.classList.contains("corVermelha")) {
 this.classList.remove("corVermelha"); // Remove a classe "corVermelha"
 ulParent.classList.add("corVerde"); // Adiciona a classe "corVerde" na "ul"
 }
 // Verifica se o elemento "li" possui a classe "corRoxa"
 if (this.classList.contains("corRoxa")) {
 this.classList.add("corAmarela"); // Adiciona a classe "corAmarela" na "li"
 ulParent.classList.remove("corPreta"); // Remove a classe "corPreta" do "ul"
 }
 }; });