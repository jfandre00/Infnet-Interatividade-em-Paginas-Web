//Adicionar um evendo de click ao h1 que adiciona o estilo background-color: red

const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
  h1.style.backgroundColor = 'red';
});
