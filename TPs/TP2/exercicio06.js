document.getElementById('item').addEventListener('click', function() {
    // Navegar para o elemento pai <ol> e trocar a classe
    this.parentElement.classList.replace('lista', 'listaSelecionada');
});
