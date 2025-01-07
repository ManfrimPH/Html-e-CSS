const text = document.getElementById("text");
const botao = document.getElementById("botao");
const listona = document.getElementById("lista");
const lista = [];
let contador = 0;

botao.onclick = function(){

  let nome = text.value; 

  console.log(nome);

}

botao.addEventListener("click", function(){

  lista.push(text.value);
  text.value = "";
  console.log(lista);
  contador++;
  imprimir();

})

function imprimir(){

  let i = 0;

  while(i!=contador){
    const li = document.createElement("li");
    li.textContent = lista[i];
    listona.appendChild(li);
  }
}
