// Função para permitir que o item seja solto
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  // Função que armazena o ID do item arrastado
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  // Função que define o comportamento ao soltar o item no container
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    ev.target.appendChild(draggedElement);
  }
  
  // Função para gerar uma cor aleatória
  function getRandomColorClass() {
    const colors = ["corVerde", "corRoxa", "corLaranja", "corVermelha"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  // Função para criar e adicionar uma nova caixinha ao div 'novo'
  function criarCaixinha() {
    const novoDiv = document.getElementById("novo");
  
    // Criar uma nova div de classe 'caixinha'
    const novaCaixinha = document.createElement("div");
    novaCaixinha.classList.add("caixinha");
    novaCaixinha.classList.add(getRandomColorClass());
  
    // Atribuir um ID único à nova caixinha
    const uniqueId = 'caixinha' + Date.now();
    novaCaixinha.id = uniqueId;
  
    // Definir a nova caixinha como arrastável
    novaCaixinha.setAttribute("draggable", true);
    novaCaixinha.addEventListener("dragstart", drag);
  
    // Adicionar a nova caixinha ao div 'novo'
    novoDiv.appendChild(novaCaixinha);
  }
  
  // Adiciona evento ao botão de criar caixinhas
  document.getElementById("criar").addEventListener("click", criarCaixinha);
  
  // Adiciona IDs únicos e eventos de drag às caixinhas já existentes ao carregar a página
  window.onload = function() {
    var caixinhas = document.querySelectorAll('.caixinha');
    caixinhas.forEach(function(caixinha, index) {
      caixinha.id = 'caixinha' + index;
      caixinha.setAttribute('draggable', true);
      caixinha.addEventListener('dragstart', drag);
    });
  };
  