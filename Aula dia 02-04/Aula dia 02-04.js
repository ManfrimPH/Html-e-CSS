function somar(){

  let a = 5;
  let b = 3;
  document.getElementById("saida").innerHTML = "Resultado = " + (a+b);

}

function calcQuadrado(numero){

  //document.getElementById("saida").innerHTML = "Quadrado de " + numero + "=" + numero *numero;

  return numero * numero;

}

calcQuadrado(4);

function imprimir(operacao){

  document.getElementById("saida").innerHTML = "<p>Resultado da operação é = " + operacao + "</p>";

}

imprimir(calcQuadrado(4));

function cparaf(){

  let tempc = document.getElementById("tempc");
  let tempf = document.getElementById("tempf");

  if(tempc.value !== ""){

    let numc = parseFloat(tempc.value);
    let numf = (numc * 9/5) + 32;
    tempf.value = numf.toFixed(2);

  }else{
    
    tempf.value = "";

  }

}

function fparac(){

  let tempc = document.getElementById("tempc");
  let tempf = document.getElementById("tempf");

  if(tempc.value !== ""){

    let numf = parseFloat(tempf.value);
    let numc =(numf - 32) * 5/9;
    tempc.value = numc.toFixed(1);

  }else{
    
    tempc.value = "";

  }

}
