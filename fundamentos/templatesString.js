const nome = "Bruno";
const template = `
Olá, 
${nome}!
`;
console.log(template); // Irá quebrar a string ! , HYPERTELAÇÃO.

// EXPRESSÔES

console.log(`1+1 = ${1+1}!`);

const up = texto => texto.toUpperCase();
console.log(`EI.... ${up('CUIDADO!!!')}`);