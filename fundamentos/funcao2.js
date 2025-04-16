// armazenando uma função em uma variavel
const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,6);

// Armazenando uma função arrow em uma váriavel 

const soma = (a,b) => {
return a + b
}

console.log(soma(2,3))

// retorno impricito
const subtracao = (a,b) => a-b

console.log(subtracao(4,2))