var agora =new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if (hora >= 6 && hora < 12) {
    console.log('Periodo da Manha, Bom dia!');

} else if (hora >= 12 && hora < 18) {
    console.log('Periodo da Tarde, Boa tarde!');
} else if (hora >= 18 && hora < 23) {
    console.log('Periodo da Noite, Boa noite!');
} else {
    console.log('Periodo da Madrugada, Boa madrugada!');
}