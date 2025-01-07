const inputPilha = document.getElementById("inputPilha");
const botaoAddPilha = document.getElementById("botaoAddPilha");
const listaPilha = document.getElementById("listaPilha");
const botaoRemoverPilha = document.getElementById("botaoRemoverPilha");

let pilha = [];
let valor;

botaoAddPilha.onclick = function(){

  valor = inputPilha.value;
  pilha.push(`<p class="respPilha">${valor}</p>`);    
  pilha.reverse();

  listaPilha.innerHTML = pilha.join(" ");
  pilha.reverse();

}

botaoRemoverPilha.onclick = function(){

  pilha.pop();
  pilha.reverse();
  listaPilha.innerHTML = pilha.join(" ");
  pilha.reverse();
  
}

//--------------------------------------------------------------------------------------

const inputFila = document.getElementById("inputFila");
const botaoAddFila = document.getElementById("botaoAddFila");
const listaFila = document.getElementById("listaFila");
const botaoRemoverFila = document.getElementById("botaoRemoverFila");

let fila = [];
let valor1;

botaoAddFila.onclick = function(){

  valor1 = inputFila.value;
  fila.push(`<p class="respPilha">${valor1}</p>`);    
  listaFila.innerHTML = fila.join(" ");

}

botaoRemoverFila.onclick = function(){

  fila.shift();
  listaFila.innerHTML = fila.join(" ");

  
}

//--------------------------------------------------------------------------------------

const inputLista = document.getElementById("inputLista");
const botaoAddLista = document.getElementById("botaoAddLista");
const listaLista = document.getElementById("listaLista");
const botaoRemoverLista = document.getElementById("botaoRemoverLista");
const idLista = document.getElementById("idLista");

let lista = [];
let valor2;
let conteudo = []


botaoAddLista.onclick = function(){

  let posicao = idLista.value;
  valor2 = inputLista.value;
  lista[posicao] = (`<p class="respPilha">${valor2}</p>`);    
  listaLista.innerHTML = lista.join(" ");

}

botaoRemoverLista.onclick = function(){

  let posicao = idLista.value;
  lista.splice(posicao,1);
  listaLista.innerHTML = lista.join(" ");

}