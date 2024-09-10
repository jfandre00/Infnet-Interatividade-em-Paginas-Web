//utilizando o eventListener faça com que ao clicar em um elemento <li> seja exibido o conteúdo desta tag li em um alert

document.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        alert(event.target.innerHTML);
    }});


    