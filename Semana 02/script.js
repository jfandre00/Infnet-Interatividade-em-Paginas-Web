document.getElementById("p1").title = "Objetos DOM";

document.getElementById("imagem").src = "html_5.png";

//Criar o novo elemento
const paragrafo3 = document.createElement("p");

// Para adicionar texto ao elemento <p>, primeiro deve ser criado o nó de texto
const noTexto = document.createTextNode("Terceiro parágrafo criado.");

// Adicionar o nó de texto ao parágrafo
paragrafo3.appendChild(noTexto);


// Adicionar o elemento <p> a um elemento existente
const element = document.getElementById("div1");
element.appendChild(paragrafo3);

// Removendo elementos 
const elmnt = document.getElementById("par1");
elmnt.remove();

// Substituindo elementos

const child = document.getElementById("par2");
element.replaceChild(paragrafo3, child);
