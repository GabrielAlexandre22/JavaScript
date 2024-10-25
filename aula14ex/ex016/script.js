function contar(){
    let inicio = document.getElementById("txtinicio").value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let res = document.getElementById('res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = `Impossível contar!`
    } else{
        res.innerHTML = `Contando:<br>`

        if(passo == 0){
            alert(`Passo inválido! Considerando PASSO 1`)
            passo = 1
        }

        if(Number(inicio) < Number(fim)){
            for(inicio = Number(inicio) ; inicio <= Number(fim); inicio = inicio + Number(passo)){
            res.innerHTML = res.innerHTML + inicio + ` 👉 `
        }
        res.innerHTML = res.innerHTML + `🏁`
        }else{
            for(inicio = Number(inicio) ; inicio >= Number(fim); inicio = inicio - Number(passo)){
                res.innerHTML = res.innerHTML + inicio + ` 👉 `
            }
            res.innerHTML = res.innerHTML + `🏁`
        }
    }
}