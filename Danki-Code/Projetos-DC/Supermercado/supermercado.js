var items = []; //criando um array vazio para items

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{  //chamando o botao e definindo click para ele e funçao sendo reproduzida pelo click 
    var nomeProduto = document.querySelector('input[name=nome_produto');  //criando var chamando input string
    var precoProduto = document.querySelector('input[name=price]'); //criando var chamando input number

    items.push({   //cadastrando o array e adicionando push as variaveis direcionadas  e adicionando val a eles
        nome: nomeProduto.value, //value sendo usado para PEGAR e SETAR valores
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos') //criando var chamando class da div lista produtos
    let soma = 0; //criando valor da soma base
    listaProdutos.innerHTML = ""; //deixando a manipulaçao setada como vazia para receber apenas um valor e impedir repetiçoes/bugs no code
        items.map(function(val){ // //definindo funçao a items MAP (detalhar)
            soma+=parseFloat(val.valor); //definindo q soma é mais ou igual a valor + valor e parseFloat nos permite ter numeros double(quebrados)
            // definindo adicionar ao lista produtos com base na div colocando nome e valor.
            listaProdutos.innerHTML+=` 
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3> </div>`;
        
    })

    soma = soma.toFixed(2); //definindo q os numero double(quebrado) só pode ter 2 casas dps no maximo, para impedir numeros grotescos
    nomeProduto.value = ""; //deixando as string vazia da box sempre
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h2');
     elementoSoma.innerHTML = 'R$'+soma;
});

document.querySelector('button[name=limpar]')  //selecionando botao
.addEventListener('click',()=>{     //definindo evento de click ao botao
    items = [];                 //funçao definida que ao clicar no botao limpar, resetaremos a lista de produtos, a array items e a soma, ou seja reiniciaremos tudo.
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h2').innerHTML = "";

})