function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fAno.value.length == 0 || fAno.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fAno.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'babymenino.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homemjovem.png')
            } else {
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'babymenina.png')
            } else if (idade < 50){
                img.setAttribute('src', 'mulherjovem.png')
            } else {
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

};