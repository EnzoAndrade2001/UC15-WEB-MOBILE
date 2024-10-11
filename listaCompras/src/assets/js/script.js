//Criar uma lista de compras onde possa acidionar elementos e remover
const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const liInput = wrapper.querySelector("#liInput");
const ulLista = document.querySelector(".lista");
const errorMessage = document.getElementById("error-message");
let preValue;

function clearError() {
        errorMessage.textContent= '';
};

function showError(message) {
        errorMessage.textContent = message;
}

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

   

        let li = document.createElement("li");
        li.innerText = liValue;
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Deletar";
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
});

function showError(message){
        errorMessage.textContent = message;
};

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



/*
*/











