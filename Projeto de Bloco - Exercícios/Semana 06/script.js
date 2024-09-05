let upload = document.querySelector(".uploadFile");
let input = document.getElementById("inputFile");
let titulo = document.querySelector("#titulo");
let iconeX = document.querySelector(".closeIcon");
let arquivos = [];


iconeX.onclick = function(eventoClique) {
    eventoClique.stopPropagation();
    titulo.innerText = "Selecione seu arquivo";
    upload.classList.remove("uploadFile--selected");
    arquivos = [];
    input.value = "";
}


upload.onclick = function() {
    input.click();

};

input.addEventListener("change", handleFiles, false);

function handleFiles() {
  const fileList = this.files; 
  if(fileList.length > 0) {
    arquivos.push(fileList[0]);
  }
  if(arquivos.length > 0) {
    titulo.innerText = arquivos[0].name;
    upload.classList.add("uploadFile--selected");
  }
  if(arquivos.length == 0) {
    upload.classList.remove("uploadFile--selected");
    titulo.innerText = "Selecione seu arquivo";
    input.value = "";
  }
}

