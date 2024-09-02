function ativaDesativaClasse() {
    //pegar a h1 com id h1
    let h1 = document.getElementById('h1');
    //ao clicar a função será executada e ela deve ativar e desativar a classe título na tag h1
    h1.classList.toggle('titulo');
}