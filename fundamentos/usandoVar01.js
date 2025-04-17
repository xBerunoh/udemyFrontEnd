{ { { { var sera = 'Sera?' } } } } 

console.log(sera);
 // ESCOPO O LOCAL ONDE AQUELA VARIAVEL É VISIVEL.

 function teste(){
    var local = 123

 }

 // console.log(local); ERRO NÃO PODEMOS CHAMAR UMA VARÍAVEL QUE ESTÁ DECLARADA DENTRO DE UMA FUNÇÃO FORA DELA.
 // IMPORTANTE FUGIR DE ESCOPO GLOBAL --> WINDOW.