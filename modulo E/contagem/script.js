function contar() {

    // buscando elemento no html
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    // definindo se nao esta vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        // convertendo os dados
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(`Passo inválido! Considerando passo 1` )
            p =1
        }

        //fazendo o laco
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }

            }else {
                //contagem regresiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1f449}`
                }
            }
            res.innerHTML += `\u{1f3c1}`
    }}