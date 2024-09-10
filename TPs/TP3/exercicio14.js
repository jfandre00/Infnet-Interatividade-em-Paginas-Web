//Adicione um event listener de keydown ao elemento input de id=texto. Verifique se o usuario apertou a tecla Ebter enquanto esta com o input selecionado. Caso tenha apertado a tecla, o conteudo do elemento input sera copiado para o span de id nome. Apos isso limpe o conteudo do elemento input.

document.getElementById('texto').addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        document.getElementById('nome').innerHTML = document.getElementById('texto').value;
        document.getElementById('texto').value = '';
    }
});





