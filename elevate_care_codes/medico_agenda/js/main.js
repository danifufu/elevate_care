var modal = document.getElementById("modal-simples");
var modalbtn = document.getElementById("botao-sino");
var fecharbtn = document.getElementsByClassName("fechar")[0]; 


modalbtn.addEventListener("click", openModal);
fecharbtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display ='block';
}

function closeModal() {
    modal.style.display ='none';
}