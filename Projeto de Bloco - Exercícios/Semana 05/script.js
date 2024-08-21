let checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(function(checkbox){
    checkbox.onclick = function(){
        this.classList.toggle("checkbox--checked");
    }
})

function teste() {
    let mpb = document.getElementById("checkboxMPB");
    let rock = document.getElementById("checkboxRock");
    //let marcado = false;

    if(mpb.classList.contains("checkbox--checked")) {
        //marcado = true;
        alert("MPB Marcado")
    };

    if(rock.classList.contains("checkbox--checked")) {
        //marcado = true;
        alert("Rock Marcado")
    };

}