var modal = document.getElementById("modal-cadastro")
var criar = document.getElementById("botao1")
var fechar1 = documen.getElementsByClassName("botaox")[0];

criar.addEventListener("click", openModal);
fechar1.addEventListener("click", closeModal);

function openModal (){
    modal.style.display = "block"
};

function closeModal (){
    modal.style.display = "none"
};


