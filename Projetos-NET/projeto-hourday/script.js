function Carregar() {
var msg = document.getElementById("msg")  
var img = document.getElementById("imagem")
var data = new Date()  //pegando data atual
var hora = data.getHours()  //pegando hora atual

msg.innerHTML = 'Agora são ' +hora + " horas."
if (hora >= 6 && hora < 12) {
    img.src = "fotoManha.png" 
    document.body.style.background = 'ebd0a2';
}else if (hora >= 12 && hora <= 18) {
    img.src = "fotoTarde.png"
    document.body.style.background = '#d6972b';
}else{
    img.src = "fotoNoite.png"
    document.body.style.background = '#000000';
}
    


}