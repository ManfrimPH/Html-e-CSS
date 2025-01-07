apresentar_cliente();

function apresentar_cliente(){

  let texto;

  let vetor = [];

  let i;

  for(i=0;i<localStorage.length;i++){

    const item = JSON.parse(localStorage.getItem(localStorage.key(i)));

    texto =  
    `<div class="item">
      <table>

        <tr>

        <td><h3 class="p_item1">Nome:</h3></td> <td><h3 class="p_item1">Descrição:</h3></td> <td><h3 class="p_item1">Preço:</h3></td> <td><h3 class="p_item1">Ação:</h3></td>

        </tr>

        <tr>

          <td><p class="p_item1">${item.nome}</p></td> 
          <td><p class="p_item1">${item.descricao}</p></td> 
          <td><p class="p_item1">R$${item.preco}</p></td> 
          <td><button onclick="adicionar_carrinho(${i})" class="botao" id="botao_add">Add Carrinho</button></td>

        </tr>

       </table>
    </div>
    `;


    vetor[i] = texto;

  }

    const lista = document.getElementById("lista");

    lista.innerHTML = vetor.join(" ");

}

var valor = [];

var compras = [];

function adicionar_carrinho(id){

  const item = JSON.parse(localStorage.getItem(localStorage.key(id)));

  let compra_html = 
  `
  <div class="item">

    <table>

      <tr>

        <td><h3 class="p_item2">Nome:</h3></td> <td><h3 class="p_item2">Descrição:</h3></td> <td><h3 class="p_item2">Preço:</h3></td> <td><h3 class="p_item2">Ação:</h3></td>

      </tr>

      <tr>

        <td><p class="p_item2">${item.nome}</p></td> 
        <td><p class="p_item2">${item.descricao}</p></td> 
        <td><p class="p_item2">R$${item.preco}</p></td> 
        <td><button onclick="remover(${compras.length})"  class="botao">Remover</button></td>

      </tr>

    </table>

  </div>
  `

  valor.push(Number(item.preco).toFixed(2));

  compras.push(compra_html);

  const lista_compras = document.getElementById("lista_compras");

  lista_compras.innerHTML = compras.join(" ");

  apresentar_valor();

}


function remover(id){

  const lista_compras = document.getElementById("lista_compras");

  compras[id] = " ";

  valor[id] = 0;
  
  lista_compras.innerHTML = compras.join(" ");

  console.log(compras);

  apresentar_valor();

}


function apresentar_valor(){


  const local_valor = document.getElementById("valor");

  let i = 0;

  let numero = 0;

  let soma = 0;

  for(i=0;i<valor.length;i++){

    console.log(soma);

    numero = +valor[i];

    soma = soma + numero;

  }

  console.log(soma);
  console.log(valor);''

  local_valor.innerHTML = ` <h1>Total: R$${soma}</h1>       <button onclick="finalizar_compra()" class="botao">Finalizar Compra</button>  `

}

function finalizar_compra(){

  if(compras!=null){

      const local_finalizar = document.getElementById("finalizar_compra");

      local_finalizar.innerHTML = 
      `
      <div id="novo">
      
        <label for="nome">Nome:</label>
        <input type="text" id="nome_completo"><br>
        <label for="descricao">Cpf:</label>
        <input type="text" id="cpf"> <br>
        <label for="preco">Endereço</label> 
        <input type="text" id="endereco"><br>
  
  
        <button onclick="comprar()" id="botao_comprar" class="botao" >Comprar</button>
    
      </div>

      `

  }else{

    //nada;

  }

}


function comprar(){

  const input_nome = document.getElementById("nome_completo");
  const input_descricao = document.getElementById("cpf");
  const input_preco = document.getElementById("endereco");

  if(input_nome.value == "" || input_descricao.value == "" || input_preco.value == ""){

    window.alert("Você não preencheu todos os campos!");

  }else{

    if(window.confirm("Você realmente quer finalizar a compra?")){

      window.alert("Muito obrigado por comprar conosco, volte sempre!");

      input_nome.value = ""; 
      input_descricao.value = "";
      input_preco.value = "";

      compras = [];

      valor = [];

      valor[0] = 0;

      const lista_compras = document.getElementById("lista_compras");

      lista_compras.innerHTML = compras.join(" ");


      apresentar_valor();

      const local_finalizar = document.getElementById("finalizar_compra");

      local_finalizar.innerHTML = "";

    }

  }


}