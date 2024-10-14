
const ulLista = document.querySelector(".lista");
const btnCarrega = document.getElementById("carregaItem");
let arrCompras = [];

function loadList(){
    btnCarrega.addEventListener("click", ()=>{
        ulLista.innerText = "";
           if(localStorage.meuArr){
               arrCompras = JSON.parse(localStorage.getItem('meuArr'));
           }
      
           for(var i in arrCompras){
           let p = document.createElement("p");
           p.innerHTML = arrCompras[i];
           ulLista.append(p);
           
           }
    });
}


document.getElementById("carregaItem").addEventListener("click", loadList);

export { loadList };

