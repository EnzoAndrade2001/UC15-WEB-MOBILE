//Criar uma lista de compras onde possa acidionar elementos e remover

const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const liInput = wrapper.querySelector("#liInput");
const generateBtn = form.querySelector("button");
const ulLista = document.querySelector(".lista");
let preValue;

form.addEventListener("submit", (event) =>{
        event.preventDefault();
    
        let liValue = liInput.value.trim();

        if(!liValue || preValue == liValue){
            alert("Preencha o campo para gerar o QR-Code")
            return
    }
    
    preValue = liValue;

   let li = document.createElement("li");
   li.innerText = liValue;
   ulLista.appendChild(li);
})

form.addEventListener("submit2", (event) =>{

liValue
ulLista.removeChild(li)

})


