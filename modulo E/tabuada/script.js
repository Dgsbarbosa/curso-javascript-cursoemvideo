function tabuada(){

    // pegando os elementos do html
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //confere se é vazio
    if (num.value.length == 0){
        alert('Por favor, digite um número')
    }
    
    else{
        // converte em numero
         let n = Number(num.value)

        //Retorna vazio 
        tab.innerHTML = ''

        // Calcula 
        for(i = 1; i <= 10 ; i++){
        
        let item = document.createElement('option')
        
        item.text = `${n} X ${i} = ${n * i}`
        
        tab.appendChild(item)

}
    }
}