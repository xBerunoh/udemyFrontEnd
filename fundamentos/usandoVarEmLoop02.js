const funcs = []; // array
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i) // Função anonima, adicionando valores no array.
    })
} 

funcs[2]();
funcs[8](); 