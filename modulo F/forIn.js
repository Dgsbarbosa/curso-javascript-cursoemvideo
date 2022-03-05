let valores = [8, 1, 7, 4, 2, 9]

console.log(`Mostrando os valores do array \n ${valores} \n------------\n`); //mostra o array

//Percorrendo o array com for

console.log('Percorrendo o array com for');

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]} `);
    
}console.log('\n------------\n');

//Percorrendo o array com for in
console.log('Percorrendo o array com for in');
for( let posicao2 in valores){
    console.log(`A posição ${posicao2} tem o valor ${valores[posicao2]} `);
  
}  console.log('\n------------\n');

// Buscando valores dentro do array
 console.log('Buscando valores dentro do array');
 
 console.log(`O valor 2 está na posição ${valores.indexOf(2)}\n ---------------\n`);

 // Fazendo uma condição



 console.log('Fazendo uma condição\n' );

 let pos = valores.indexOf(3)
 if (pos == -1 ){
     console.log('Valor nao encontrado');
 }else{
    console.log(`O valor 4 está na posição ${pos}\n ---------------\n`);

 }
