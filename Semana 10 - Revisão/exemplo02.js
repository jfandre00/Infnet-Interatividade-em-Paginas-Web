//funcao construtora para o objeto Municipio

function Municipio(municipio, bairro, rua) {
    this.municipio = municipio;
    this.bairro = bairro;
    this.rua = rua;
}

function criarObjetoMunicipio() {
    let municipio = document.getElementById("municipio").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;

    let endereco = new Municipio(municipio, bairro, rua);

    //Exibindo na tela
    document.getElementById("resultado").innerText = "Endereço cadastrado:\nMunicípio: " + endereco.municipio + "\nBairro: " + endereco.bairro + "\nRua: " + endereco.rua;
}