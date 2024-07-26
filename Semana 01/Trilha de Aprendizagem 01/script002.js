let pessoa1 = {
    nome: ["João", "Sembraço"],
    idade: 22,
    sexo: "masculino",
    interesses: ["música", "história", "futebol"],
    bio: function() {
        alert(
            this.nome[0] + " " + this.nome[1] + " tem " + this.idade + " anos de idade. Ele gosta de " + this.interesses[0] + ", " + this.interesses[1] + " e " + this.interesses[2] + "."
        );
    },
    saudacao: function() {
        alert("Oi! Eu sou " + this.nome[0] + ".");
    }
};

// Adicionando idade ao elemento demo1 sem sobrescrever
document.getElementById("demo1").innerHTML += "Idade: " + pessoa1.idade + "<br>";

// Adicionando nome ao elemento demo1 sem sobrescrever
document.getElementById("demo1").innerHTML += "Nome: " + pessoa1.nome.join(" ") + "<br>";