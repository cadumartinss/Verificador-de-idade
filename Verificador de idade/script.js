function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os daos e tente novamnete!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/Criança homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './assets/Jovem homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './assets/Adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', './assets/Idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/Criança mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './assets/Jovem Mulher.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', './assets/Adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', './assets/Idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}