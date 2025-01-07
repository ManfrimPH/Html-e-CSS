function calcular(){

  const caixaText = document.getElementById("lado");
  const caixaOpcao = document.getElementById("opcao");
  const resp = document.getElementById("resultado");
  let valor;

  if(caixaOpcao.value=="area"){

    valor = caixaText.value;
    
    resp.innerHTML = `<h2>${valor*valor}</h2>`

  }else{

    valor = caixaText.value;
    
    resp.innerHTML = `<h2>${valor*4}</h2>`

  }

}