document.getElementById('formulario').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
   
    // Obtém os valores dos campos
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let cpf = document.getElementById('cpf').value.trim();
    // Obtém os elementos para mostrar mensagens de erro
    let erroNome = document.getElementById('erroNome');
    let erroEmail = document.getElementById('erroEmail');
    let erroCpf = document.getElementById('erroCpf');
    // Reseta as mensagens de erro
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroCpf.textContent = '';
    // Valida o campo Nome
    if (nome === '') {
    erroNome.textContent = 'O campo nome não pode estar vazio.';
    }
    // Valida o campo E-mail
    if (!email.includes('@')) {
    erroEmail.textContent = 'O e-mail deve conter um "@"';
    }
    // Valida o campo CPF
    if (cpf.length !== 11 && cpf.length !== 14) {
    erroCpf.textContent = 'O CPF deve ter 11 ou 14 caracteres.';
    }
    // Se não houver erros, exibe um alerta
    if (erroNome.textContent === '' && erroEmail.textContent === '' && erroCpf.textContent
   === '') {
    alert('Formulário enviado com sucesso!');
    }
   };
   // função trim -> remove espaços no início e final de uma String.
   // função includes -> Verifica se um determinado valor faz parte de uma String.