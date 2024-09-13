function display() {
    dispWin = window.open('', 'NewWin', 'menubar=no,toolbar=no,status=no,width=400,height=150');

    mensagem = "<ul>";
    //Podemos usar indexador ao inves de nome do elemento, pois o form é um array. Serve para casos que você não sabe qual o nome dos elementos.

    mensagem += "<li>NOME: " + document.form1[1].value + "</li>"; //document.form1.nome.value
    mensagem += "<li>TELEFONE: " + document.form1[2].value + "</li>"; //document.form1.telefone.value
    mensagem += "<li>MENSAGEM: " + document.form1[3].value + "</li>"; //document.form1.mensagem.value
    mensagem += "<li>TOKEN: " + document.form1.token.value + "</li>"; 
    mensagem += "<li>CURSO: " + document.form1.curso.value + "</li>";
    mensagem += "<li>TURNO: " + document.form1.turno.value + "</li>";
    mensagem += "<li>PAGAMENTO: " + document.form1.pagamento.value + "</li>";
    mensagem += "</ul>";

    dispWin.document.write(mensagem);
}

document.getElementById("exibir").addEventListener("click", display);


// Variável booleana para alternar o modo escuro
let darkMode = false;

// Função para alternar o modo de exibição
window.onclick = function(event) {
    if (!event.target.closest("fieldset")) {

        // Verifica o valor da variável darkMode
        if (darkMode == false) {
            // Se for false, altera o tema para escuro
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            console.log("Modo escuro ativado.");
        } else {
            // Se for true, altera o tema para claro
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            console.log("Modo regular ativado.");
        }
        // Alterna o valor da variável darkMode
        darkMode = !darkMode;
    };
}