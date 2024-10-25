function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute ('src', 'foto_homem_crianca.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute ('src', 'foto_homem_jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto_homem_adulto.png')
            } else {
                //Idoso
                img.setAttribute ('src', 'foto_homem_idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute ('src', 'foto_mulher_crinca.png')
            } else if (idade < 21){
                //JOvem
                img.setAttribute ('src', 'foto_mulher_jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute ('src', 'foto_mulher_adulta.png')
            } else{
                //Idoso
                img.setAttribute ('src', 'foto_mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o gênero <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}