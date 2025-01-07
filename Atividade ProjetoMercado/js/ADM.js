apresentar();

function criar(){

  const input_nome = document.getElementById("nome");
  const input_descricao = document.getElementById("descricao");
  const input_preco = document.getElementById("preco");

  if(input_nome.value=="" || input_descricao.value=="" || input_preco.value==""){

    alert("Você não preencheu todos os campos");

  }else{

    const item = {

      nome: input_nome.value,
      descricao: input_descricao.value,
      preco: input_preco.value

    };

    const itemJSON = JSON.stringify(item);
    localStorage.setItem(input_nome.value, itemJSON);

    apresentar();

  }

}

function editar(id){

  if(window.confirm("Você realmente quer editar as informações desse item?")){

    const item = JSON.parse(localStorage.getItem(localStorage.key(id)));
    const input_nome = document.getElementById("nome");
    const input_descricao = document.getElementById("descricao");
    const input_preco = document.getElementById("preco");

    if(input_nome.value=="" || input_descricao.value=="" || input_preco.value==""){

      alert("Você não preencheu todos os campos");

    }else{

      const item1 = {

        nome: input_nome.value,
        descricao: input_descricao.value,
        preco: input_preco.value

      };

      const itemJSON = JSON.stringify(item1);
      localStorage.setItem(item.nome, itemJSON);

      apresentar();

  }

}

}

function excluir(id){
  
  if(window.confirm("Você realmente deseja excluir esse item ?")){

    localStorage.removeItem(localStorage.key(id));

    apresentar();

  }

}




function apresentar(){

  let texto;

  let vetor = [];

  let i;

  for(i=0;i<localStorage.length;i++){

    const item = JSON.parse(localStorage.getItem(localStorage.key(i)));

    texto =  
    `<div class="item">
      <table>

        <tr>

          <td><h3 class="p">Nome:</h3></td> <td><h3 class="p">Descrição:</h3></td> <td><h3 class="p">Preço:</h3></td> <td><h3 class="p">Ação:</h3></td> <td><h3 class="p">Ação:</h3></td>

        </tr>

        <tr>

          <td><p class="p">${item.nome}</p></td> 
          <td><p class="p">${item.descricao}</p></td> 
          <td><p class="p">R$${item.preco}</p></td> 
          <td><button onclick="editar(${i})"  class="botao" id="botao_editar">Editar</button></td>
          <td><button onclick="excluir(${i})" class="botao" id="botao_excluir">Excluir</button></td>

        </tr>

      </table>
    </div>
    `;


    vetor[i] = texto;

  }

    const lista = document.getElementById("lista");

    lista.innerHTML = vetor.join(" ");

}



