var xhr = new XMLHttpRequest();
var documento;

/*onreadystatechange = quando mudar o estado do nosso objeto
readyState = armazena o estado atual da sua requisição  {
0:requisição nao inicializada
1:estabeleceu requisição com o servidor
2: pedido recebido
3:processamento recebido
4:solicitação concluida } */
xhr.responseType = 'json';
xhr.onreadystatechange = function(){     //onreadystatechange = vai ficar lendo o código procurando alterações 
  //função sempre vai ser chamada quando alterar para algum dos estados númericos
    if(xhr.readyState == 4 && xhr.status == 200){    //quando estiver concluida ira imprimir o obj na tela  //status == 200, so imprimira se estiver correto
        documento = xhr.response;  // aqui estamos imprimindo apenas a resposta em vez de imprimir o hmlhttprequest inteiro
        document = JSON.parse(documento); // aqui estamos transformando o nosso documento de string para objeto
        console.log(documento);  //imprimindo apenas a resposta

    }
}  //lendo o estado da requisição e apenas quando estiver pronto imprimir a requisição

xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1");  //abrindo o objeto  //PEGANDO O VALOR DA URL
// O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

xhr.send()  //mandando a requisição, toda a config acima é concretizada aqui !!