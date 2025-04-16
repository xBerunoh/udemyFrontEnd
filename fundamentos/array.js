// Array -> Vetores

const valores = [7.7 ,  8.9 , 6.3 , 9.2]; // Array com 4 posições
console.log(valores[0], valores[3]); // Consultar o indice 0 e 3
console.log(valores[4]); // consultar o indice 4 , onde vai voltar o valor UNDEFINED

valores[4] = 10;
console.log(valores[4]);

console.log(`valor do inice [1] ${valores[1]}`);

console.log(valores);

console.log(valores.length); // Vai informar quantos elementos em um Array.
valores.push({id: 3}, false, null , `teste`); // vai adicionar valores no Array.
console.log(valores);

console.log(valores.pop()); // vai excluir o ultimo valor do array
console.log(valores);

delete valores[1]; // vai tirar o elemento do indice 1 do array
console.log(valores); 

console.log(typeof valores); // Array é de um tipo objeto EM JS.