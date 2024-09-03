/* Exercício 15
ENUNCIADO:
No arquivo script.js, siga as etapas abaixo:

Clique no botão da tag <button>, dentro de uma <td>

Ao clicar chame uma função, que verifique:

O conteúdo da classe "nota"


Caso esta nota seja maior ou igual a 5: Adicione uma classe à <tr> da tag clicada, que faça sua cor de fundo fique verde

Caso esta nota seja menor do que 5:
Adicione uma classe à <tr> da tag clicada, que faça sua cor de fundo fique vermelho
OBSERVAÇÕES:
Não faça as alterações manualmente no arquivo index.html
Utilize o DOM para resolver o exercício */


// pegar todos os botões
let buttons = document.querySelectorAll('button');

//Inserir a função que muda a classe conforme a nota
// percorrer todos os botões

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    // adicionar o evento de click
    button.addEventListener('click', function() {
        // pegar o td
        let td = this.parentElement;
        // pegar o tr
        let tr = td.parentElement;
        // pegar a nota
        let nota = tr.querySelector('.nota').textContent;
        // verificar a nota
        if (nota >= 5) {
            // adicionar a classe verde
            tr.classList.add('verde');
        } else {
            // adicionar a classe vermelho
            tr.classList.add('vermelho');
        }
    });
}

