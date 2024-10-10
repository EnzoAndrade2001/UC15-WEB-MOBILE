//Criar uma lista de compras onde possa acidionar elementos e remover
const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const liInput = wrapper.querySelector("#liInput");
const ulLista = document.querySelector(".lista");
let preValue;

form.addEventListener("submit", (event) => {
        event.preventDefault();

        let liValue = liInput.value.trim();



        if (!validarInput() || verificaLista() ) {
                return;
        }

        preValue = liValue;

        let li = document.createElement("li");
        li.innerText = liValue;


        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Deletar";
        deleteBtn.addEventListener("click", () => {
                ulLista.removeChild(li);
        });


        li.appendChild(deleteBtn);
        ulLista.appendChild(li);


        liInput.value = '';
});

function validarInput() {

        if (liInput.value.length < 4) {
                alert("O item da lista de compras deve ter pelo menos 4 caracteres.");
                return false;
        }

        if (liInput.value.trim() === "") {
                alert("O item deve ser valido")
                return false;
        }

        if (!liInput.value.trim() || preValue === liInput.value.trim()) {
                alert("Preencha o campo para adicionar o item");
                return false;
        }

        return true;
}

function verificaLista() {
        for(ulLista = 0; ulLista < li.length; ulLista++){
                console.log(ulLista[li]);
        }
}















