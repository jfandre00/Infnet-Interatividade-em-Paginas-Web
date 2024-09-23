document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formEmpresa').addEventListener('submit', function(event) {
        event.preventDefault();
        criarObjetoEmpresa();
    });
});

function criarObjetoEmpresa() {
    // Capturando os valores dos campos
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let area = document.getElementById("area").value;

    if (nome == "" || email == "" || telefone == "" || area == "" || isNaN(telefone)) {
        alert("Preencha todos os campos corretamente!");
        return;
    } else {
        // Criando o objeto empresa
        let empresa = {
            nome: nome,
            email: email,
            telefone: telefone,
            area: area
        };

        document.getElementById("resultado").innerText = "Empresa cadastrada:\n" + 
        "Nome: " + empresa.nome + "\n" + 
        "Email: " + empresa.email + "\n" + 
        "Telefone: " + empresa.telefone + "\n" + 
        "Área: " + empresa.area;
    }
}