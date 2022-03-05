// par ou impar
console.log('Par ou Impar');

function parimp(n /*parametro formal*/) {
    //dentro do bloco ação
    if (n % 2 == 0) {

        return 'Par!'

    } else {

        return 'Impar!'
    }

}
    let num = 15
    let res = parimp(num) //a chamada da acao que se tornara parametro
    console.log(`O numero é ${num} e ele é: ${res}\n----------------------------------------------\n`)