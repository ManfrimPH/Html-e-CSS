function enviar(){

  const text1 = document.getElementById("nome");
  const text2 = document.getElementById("contato");
  const text3 = document.getElementById("quantidade");
  const text4 = document.getElementById("diciplina");
  const box = document.getElementById("projetor");

  

  if(text1.value==""||text2.value==""||text3.value==""||text4.value==""){

    window.alert("Você não preencheu todos os campos");

  }else{

    if(window.confirm("Você deseja enviar esse arquivos?")){

      window.alert("Arquivos enviados");
      
      text1.value="";
      text2.value="";
      text3.value="";
      text4.value="";
      box.value="";


    }else{

      

    }

  }

}