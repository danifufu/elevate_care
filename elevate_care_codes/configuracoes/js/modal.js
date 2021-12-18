var modal = document.getElementById("modal-usuario");
var modal2 = document.getElementById("modal-grupos"); 
var botaousuario = document.getElementById("usuarios");
var botaogrupos = document.getElementById("grupos");
var close = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close2")[0]; 

botaousuario.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
botaogrupos.addEventListener("click", openModal2);
close2.addEventListener("click", closeModal2);

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function openModal2 () {
    modal2.style.display = "flex";
}

function closeModal2 () {
    modal2.style.display = "none";
}