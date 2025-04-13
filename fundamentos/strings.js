const escola = "cod3r";

console.log(escola.charAt(4)); // Irá me retorna a letra que está no indice 4 da variavel escola
console.log(escola.charAt(5)); // Irá me retorna algo vazio, pois não achou !
console.log(escola.charCodeAt(3)); // Irá me retornar código '3' do unicode.
console.log(escola.indexOf(3)); // Existe o indice 3 ?
console.log(escola.substring(0,3)); // Irá do indice 0 até o indice 3 sem incluir o indice 3
console.log('Escola '.concat(escola).concat("!") ); // Irá fazer uma concatenação. 
console.log(escola.replace(3,'e')); // Irá substituir no indice 3 pela letra 'e' /\d/ (SUBSTITUIR TUDO NO TEXTO)

console.log('Ana, Maria , Pedro'.split(',')) // Irá fazer um array, quebrando a partir da virgula.