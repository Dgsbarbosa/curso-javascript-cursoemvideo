// criando Array
let num = ['A' ,'D' ,'B']

console.log(`\nNosso vetor é ${num} \nO comprimento do do nosso array é: ${num.length} elementos\n ---------------- \n` );

// adicionando elementos

num [3] = 'C' // adiciona o valor 
console.log(`Nosso novo array é ${num} \nO comprimento do do nosso array é: ${num.length} elementos\n ---------------- \n`);

// adicionando na ultima posicao com push

num.push('E')
console.log(`Nosso novo valor é ${num}\nO comprimento do nosso array é: ${num.length} elementos\n ---------------- \n`);

// colocanco em ordem crescente
console.log(`Em ordem crescente \n${num.sort()}\n ---------------- \n`);

// mostra a posição
console.log(`
Mostra as posiçoes
A posição 1 é: ${num[0]} 
A posição 2 é: ${num[1]}  
A posição 3 é: ${num[2]} 
A posição 4 é: ${num[3]} 
A posição 5 é: ${num[4]} \n ---------------- \n`

);

// for com array
console.log('For com array')

for(let posicao = 0; posicao < num.length; posicao++){
    console.log(`A posição ${posicao} tem valor: ${num[posicao]}`)
}









