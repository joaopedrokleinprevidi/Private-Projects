var xhr = new XMLHttpRequest;  //criamos um objeto de requisiçao
var documento = {  //criamos um documento json, armazenamos numa ariavel
    "userId": 200,
    "id": 12,
    "title": "noticia exclusiva",
    "body": "Desenvolvedor larga Jquery após descobrir o quão fácil é viver sem ele"
}

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr);
    }  //fizemos o evento de caso estiver tudo certo no 4 imprimir a requisiçao
}

xhr.open("POST","https://jsonplaceholder.typicode.com/posts"); //abrimos a requisiçao e especificamos o metodo http e a rota

xhr.send(documento); //enviamos o documento (imprimimos)
//status 201 significa criado