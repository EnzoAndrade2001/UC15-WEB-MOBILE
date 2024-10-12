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

        if(ulLista.classList.contains("active")){
                ulLista.classList.add("active");
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


const listaItems = JSON.parse(localStorage.getItem("compras")) || ["TESTE"];
listaItems = listaItems.split(",")

console.log(listaItems)

// localStorage.setItem("compras", listaItems);

// localStorage.getItem("compras");





/*
Primeiro:Verificar se ja existem items salvos no localStorage, caso nao tenha criar um array vazio
caso tenha, adicionar os items salvos ao array, criar uma função que retorna um array com os dados salvos e salva em uma const
caso não tenha os dados retornar um array vazio.



const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const liInput = wrapper.querySelector("#liInput");
const ulLista = document.querySelector(".lista");
const errorMessage = document.getElementById("error-message");

// Função para carregar itens do localStorage
function loadItems() {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach(item => addItemToList(item));
}

// Função para adicionar item à lista
function addItemToList(item) {
    let li = document.createElement("li");
    li.innerText = item;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Deletar";
    deleteBtn.addEventListener("click", () => {
        ulLista.removeChild(li);
        removeItemFromStorage(item); // Remove do localStorage
        if (ulLista.children.length === 0) {
            ulLista.classList.remove("show");
        }
    });

    li.appendChild(deleteBtn);
    ulLista.appendChild(li);

    if (!ulLista.classList.contains("show")) {
        ulLista.classList.add("show");
    }
}

// Função para remover item do localStorage
function removeItemFromStorage(item) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items = items.filter(i => i !== item); // Remove o item
    localStorage.setItem("items", JSON.stringify(items)); // Atualiza o localStorage
}

// Função para limpar a mensagem de erro
function clearError() {
    errorMessage.textContent = '';
}

// Função para mostrar mensagem de erro
function showError(message) {
    errorMessage.textContent = message;
}

// Evento de envio do formulário
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

    let items = JSON.parse(localStorage.getItem("items")) || [];
    if (items.includes(liValue)) {
        showError("O item já está na lista.");
        return;
    }

    addItemToList(liValue);

    // Salva o item no localStorage
    items.push(liValue);
    localStorage.setItem("items", JSON.stringify(items));

    liInput.value = '';
});

// Valida o input
function validarInput() {
    clearError();

    if (liInput.value.length < 4) {
        showError("O item da lista de compras deve ter pelo menos 4 caracteres.");
        return false;
    }

    if (liInput.value.trim() === "") {
        showError("O item deve ser válido.");
        return false;
    }

    return true;
}

// Verifica se o item já está na lista
function verificaLista() {
    const liItems = ulLista.querySelectorAll("li");
    for (let li of liItems) {
        if (li.innerText.replace("Deletar", "").trim() === liInput.value.trim()) {
            showError("O item já está na lista.");
            return false;
        }
    }
    return true;
}

// Carregar itens ao iniciar
loadItems();



*/











