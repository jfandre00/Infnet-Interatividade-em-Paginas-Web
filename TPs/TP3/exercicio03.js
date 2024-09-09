//Adicione um evento de teclado ao elemento input que ao pressiobnar uma tecla neste elemento, verifique:
//Se a tecla pressionada foi a
//Caso seja, exiba a mensagem "Letra a digitada"

let input = document.querySelector('input');
input.onkeyup = function(event){
    if(event.key === 'a'){
        alert('Letra a digitada');
    }
};



