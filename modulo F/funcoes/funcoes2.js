// Somando valores com função
console.log('Somando valores com função\n');

function soma(n1, n2){
    return n1 + n2
}

console.log(`${soma(1,2)}\n-------------------\n`);


// Atribuindo uma função a uma variavel
console.log('Atribuindo uma função a uma variavel\n')

let v = function(x){
    return x*2
}
 console.log(v(5));

 // Fatorial
console.log(`\n---------------\n Fatorial`);

 let num2 = 5
 
 function fatorial(n){
     let fat = 1
     for (let c = n; c > 1; c--){
     fat *= c
 }
 return fat
}
console.log(`O fatorial de ${num2}! é: ${fatorial(num2)}\n---------------\n`);

// Recursividade é quando uma função chama ela mesmo

console.log('Recursividade');

function fatorial2(n){
if (n==1){
    return 1
}else{
    return n * fatorial2(n-1)
}

}

console.log(fatorial(5));