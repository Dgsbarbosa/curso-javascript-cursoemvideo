console.log('Operadores Relacionais');
var maior = 5 > 2
var menor = 7 < 4
var maior_ou_igual = 8 >= 4
var menor_ou_igual = 9 <= 7
var igual = 5 == 5
var igual2 = 5 == '5'
var igual3 = 5 === '5'
var diferente = 5 != 5
var diferente2 = 5 !== 5

console.log(maior)
console.log(menor)
console.log(maior_ou_igual)
console.log(menor_ou_igual)
console.log(igual)
console.log(igual2)
console.log(igual3)
console.log(diferente)
console.log(diferente2)

console.log('--------------')
console.log('Operadores Lógicos');
var a = 5
var b = 8

console.log('Conjunção (&&) ')
console.log(a < b && b - 3 == a);
console.log(a < b && b < a);
console.log('-------------');

console.log('Disjunção - OU (||)');
console.log(a < b || b - 3 == a); //as duas verdadeiras
console.log(a < b || b - 3 != a); // um verdadeira
console.log(a > b || b - 3 == b); // duas falsas

// Exemplo
console.log('\n Exemplos');
var age = 14;
var age2 = 16;
var state = 'Sp';
var state2 = 'MG';
var wage/*salario*/ = 2000
var wage2 = 1000;

console.log(age >= 15 && age <= 17);
console.log(age2 >= 15 && age2 <= 17);
console.log(state == 'Rj' || state == 'Sp');

console.log('---------');

console.log('Operador Ternario');

var nota = 5;
var nota2 = 9
var nota3 = 6;
var media = (nota + nota2 + nota3)/3;
   
console.log(`Media do aluno: ${media} \n ${media >= 7? 'Aprovado': 'Reprovado'} `);


