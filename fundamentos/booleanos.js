let isAtivo = false;
console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);
isAtivo = 1; // Valor 1 se comporta como verdadeiro e 0 como negativo
console.log(!!isAtivo); // ! -> Negação

console.log("Os verdadeiros:")
console.log(!!4);
console.log(!!' ');
console.log(!!(isAtivo = true));
console.log(!!Infinity);
console.log(!!{});
console.log(!![]);
console.log("Os Falsos: ");
console.log(!!0);
console.log(!!''); // string vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar...');
console.log(''|| null || 0 || 'epa'); // IRá retorna apenas o que é true;