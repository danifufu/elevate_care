var modal = document.getElementById("modal-agendamento");
var btn = document.getElementById("buttonagende");
var fecharmodal= document.getElementsByClassName("fechar")[0];

btn.addEventListener("click", openModal);
fecharmodal.addEventListener("click", closeModal);

function openModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}