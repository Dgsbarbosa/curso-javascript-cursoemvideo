// 'declarando um objeto'
console.log('declarando um objeto');
let amigo = {}
console.log(`\nO tipo da variavel é um: ${typeof amigo}`)
console.log('\n-----------------\n');

//Mostrando um objeto

console.log('Dados de um objeto');
let amigo2 = {nome: 'Douglas', 
sexo:'m',
peso: 100}
console.log(amigo2);
console.log('\n-----------------\n');

// funçao dentro do objeto

console.log('Função dentro de um objeto');
let amigo3 = {nome: 'Douglas', 
sexo:'m',
peso: 100,
engordar(p){

}}
console.log(amigo3);
console.log('\n-----------------\n');

// Usando um funcao na variavel
console.log('Utilizando funções em um objeto');
let amigo4 = {nome: 'Douglas', 
sexo:'m',
peso: 100,
engordar(p){
    console.log('Engordou');
    this.peso += p
}}
amigo4.engordar(2)
console.log(amigo4);
console.log('\n-----------------\n');

// Chamar variavel
console.log('Chamando a variavel');
console.log(amigo2.nome);
console.log(amigo2.sexo);
console.log(amigo2.peso);
console.log(amigo4.engordar);

let num =8 
num **=2
console.log(num);