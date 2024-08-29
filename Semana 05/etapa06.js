
document.addEventListener('DOMContentLoaded', function() {
    let inputField = document.getElementById('inputText');
    let output = document.getElementById('demo');

    inputField.addEventListener('keypress', function(event) {
        output.textContent = 'Você pressionou: ' + event.key;

        if (event.key === 'a' || event.key === 'A') {
            alert('Você pressionou a tecla A');
        }
    });
});

function destacar() {
    document.getElementById("nome").style.backgroundColor = 'green';
}

function normalizar() {
    document.getElementById("nome").style.backgroundColor = 'white';
    alert("Campo nome perdeu o foco!");
}

function colocarMaiuscula(element) {
    element.value = element.value.toUpperCase(); 
}

function mostraSelecao() {
    let x = document.getElementById("curso").value;
    document.getElementById("botao").innerHTML = "Curso " + x;
}

window.onload = function() {
    document.getElementById('inputText').focus();
};


function mostraDados() {
    let dados = document.getElementById("dados");

    dados.innerHTML = "DADOS <br>" + " Tecla: " + document.getElementById("inputText").value + "<br> Nome: " + document.getElementById("nome").value + "<br> Sobrenome: " + document.getElementById("sobrenome").value +  "<br> Curso: " + document.getElementById("curso").value;
}
