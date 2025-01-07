function logar(){

  const nome = document.getElementById("nome");
  const senha = document.getElementById("senha");

  if(nome.value==="" || senha.value===""){

    window.alert("Você não preencheu todos os campos");

  }else{

    if(nome.value==="adm" && senha.value=="adm"){

      window.location.href = "/Atividade ProjetoMercado/html/ADM.html";

    }else{

      window.alert("Você não tem altorização para acessar essa página!");

    }

  }

}
