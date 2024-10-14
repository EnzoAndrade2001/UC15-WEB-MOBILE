import{showError, clearError} from './manipuladorErros.js';
import {loadList} from './gerenciadorLista.js';

const liInput = document.querySelector("#liInput");
const form = document.querySelector(".form");
const ulLista = document.querySelector(".lista");
let arrCompras = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearError();

    let liValue = liInput.value.trim();

    if (!validarInput()) {
            return;
    }

    if (!verificaLista()) {
            return;
    }

    if(ulLista.classList.contains("active")){
            ulLista.classList.add("active");
            return;
    }

    if(localStorage.meuArr){
        arrCompras = JSON.parse(localStorage.getItem('meuArr'))
     }
     
     
     
    let li = document.createElement("li");
    li.innerText = liValue;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Deletar";
    arrCompras.push(liValue);
    localStorage.meuArr = JSON.stringify(arrCompras);

    


    deleteBtn.addEventListener("click", () => {
        ulLista.removeChild(li);

        if(ulLista.children.length === 0) {
            ulLista.classList.remove("show");
        } 
    });


    li.appendChild(deleteBtn);
    ulLista.appendChild(li);

    if(!ulLista.classList.contains("show")){
            ulLista.classList.add("show");
    }

   
    liInput.value = '';

    liInput.addEventListener("click", () => {
        ulLista.classList.remove("show"); 
    });
});

function validarInput() {

    clearError();

    if (liInput.value.length < 4) {
            showError("O item da lista de compras deve ter pelo menos 4 caracteres.");
            return false;
    }

    if (liInput.value.trim() === "") {
            showError("O item deve ser valido")
            return false;
    }

    return true;
};

function verificaLista() {
    const liItems = ulLista.querySelectorAll("li");
    for(let li of liItems){
            if(li.innerText.replace("Deletar", "").trim() === liInput.value.trim()) {
                    showError("O item já está na lista.");
                    return false;
            }
    }
    return true;
};

export { validarInput, verificaLista };

