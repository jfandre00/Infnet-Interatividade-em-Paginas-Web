function trocaTexto(id) {
    id.innerHTML = "Texto Trocado";
}
function displayDate() {
    document.getElementById("pdata").innerHTML = Date();
}

function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies estão habilitados";
    } else {
        text = "Cookies não estão habilitados";
    }

    document.getElementById("paragrafo1").innerHTML = text;
}

function tornaMaiuscula() {
    const x = document.getElementById("nome");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "Obrigado!";
}

function mOut(obj) {
    obj.innerHTML = "Moveu o nosso querido mouse sobre";
}