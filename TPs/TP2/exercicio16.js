/* Exercício 16
CONTEXTO: Faça um "Accordion".

ENUNCIADO: No arquivo script.js, siga as etapas abaixo:

1. Todas as divs de "accordion":
1.1 Começam com conteúdo oculto (torne as tags <p> invisíveis)

2. Ao clicar em uma <div> de classe accordion-item:
2.1 Mostre seu conteúdo
2.2 Esconda o conteúdo das outras divs de classe accordion-item, caso alguma esteja sendo exibida
OBSERVAÇÕES:
Utilize o HTML como base, podendo ser modificado livremente
Utilize o DOM para resolver o exercício
Para o item 1 - adicionar uma classe para ocultar o contéudo da tag <p>
Para o item 2 - se clicar na div que já está com conteúdo sendo exibido, esconda seu conteúdo
DICA - como exemplo olhe o site https://getbootstrap.com/docs/5.0/components/accordion/
 */

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach((item) => {
  const paragraph = item.querySelector('p');
  paragraph.classList.add('hidden');
  item.addEventListener('click', () => {
    if (paragraph.classList.contains('hidden')) {
      accordionItems.forEach((item) => {
        item.querySelector('p').classList.add('hidden');
      });
      paragraph.classList.remove('hidden');
    } else {
      paragraph.classList.add('hidden');
    }
  });
});

