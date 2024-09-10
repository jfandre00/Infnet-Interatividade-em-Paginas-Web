function validaForm() {
    let x = document.forms["form"]["name"].value;
    if (x == "") {
        alert("Nome deve ser preenchido");
        return false;
    }

    if (x.length < 3) {
        alert("Nome deve ter mais de 3 caracteres");
        return false;
    }

    let idade = document.getElementById("idade").value;
    if (isNaN(idade) || idade < 18 || idade > 70) {
        alert("Idade deve ser um número entre 18 e 70");
        return false;
    }

    let generoSelecionado = document.querySelector('input[name="genero"]:checked');
    if (!generoSelecionado) {
        alert("Gênero deve ser selecionado");
        return false;
    }
    let atividadesTexto = "";
    let atividadesSelecionadas = document.querySelectorAll('input[name="atividades"]:checked');
    if (atividadesSelecionadas.length == 0) {
        alert("Atividades devem ser selecionadas");
        return false;
    } else {
        let atividades = [];
        atividadesSelecionadas.forEach(function(atividadesSelecionadas) {
            atividades.push(atividadesSelecionadas.value);
        })

        /* atividadesTexto = atividades.length > 0 ? atividades.join(", ") : "Nenhuma atividade selecionada"; */ 
        /* Não precisa do ternário pois temos certeza que atividadesSelecionadas.length > 0 pois já foi feita a validação acima */
        atividadesTexto = atividades.join(", ");
    }

    let paisSelecionado = document.getElementById("pais").value;
    if (paisSelecionado == "") {
        alert("País deve ser selecionado");
        return false;
    }

    //aparecer a h2
    document.getElementById("dados").style.display = "block";

    let resultado = "Nome: " + x + "<br>" + "Idade: " + idade + "<br>" + "Gênero: " + generoSelecionado.value + "<br>" + "Atividades: " + atividadesTexto + "<br>" + "País: " + paisSelecionado;

    document.getElementById("resultado").innerHTML = resultado;

    return false
}

function limparDados() {
    document.getElementById("dados").style.display = "none";
    document.getElementById("resultado").innerHTML = "";
    /* document.getElementById("form").reset(); */ 
    // Já está configurado o uso do reset no HTML, type="reset"
}

