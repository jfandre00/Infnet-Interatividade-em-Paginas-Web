/* Exercício 13
ENUNCIADO:
No arquivo script.js:

Inverta as classes da tabela

OBSERVAÇÕES:
Não faça as alterações manualmente no arquivo index.html
Utilize o DOM para resolver o exercício
Itens com classe azul:
Terão classe vermelho

Itens com classe vermelho:
Terão classe azul */

let table = document.querySelector('table');
let rows = table.rows;

// precisa pegar as tr e inverter as classes

for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    if (row.classList.contains('azul')) {
        row.classList.remove('azul');
        row.classList.add('vermelho');
    } else if (row.classList.contains('vermelho')) {
        row.classList.remove('vermelho');
        row.classList.add('azul');
    }
}