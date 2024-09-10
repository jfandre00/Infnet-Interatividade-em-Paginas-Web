function allowDrop(ev) {
    ev.preventDefault(); // Permite que o elemento seja solto
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); // Armazena o ID do elemento sendo arrastado
  }
  
  function drop(ev) {
    ev.preventDefault(); // Previne o comportamento padrão
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    ev.target.appendChild(draggedElement); // Move o elemento arrastado para o container de destino
  }
  
  // Adiciona um ID único para cada elemento caixinha
  window.onload = function() {
    var caixinhas = document.querySelectorAll('.caixinha');
    caixinhas.forEach(function(caixinha, index) {
      caixinha.id = 'caixinha' + index;
      caixinha.setAttribute('draggable', true); // Define o elemento como arrastável
      caixinha.addEventListener('dragstart', drag); // Adiciona o evento de iniciar arraste
    });
  };
  