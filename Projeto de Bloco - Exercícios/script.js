//let body = document.querySelector("body");
//body.setAttribute("style", "background-color: lightblue;")

//body.style.backgroundColor = "lightblue";

function alterar(elemento) {
    //let bandeira = document.querySelector("img");
    //Não precisa fazer da forma acima se passar o this como parâmetro da função

    if(elemento.title == "Brasil") {
        elemento.setAttribute("src", "argentina.png");
        elemento.title = 'Argentina';
        elemento.alt = 'Argentina';
        elemento.parentNode.style.backgroundColor = "lightblue";
    } else {
        elemento.setAttribute("src", "brasil.png");
        elemento.title = 'Brasil';
        elemento.alt = 'Brasil';
        elemento.parentNode.style.backgroundColor = "black";
    }
    
}