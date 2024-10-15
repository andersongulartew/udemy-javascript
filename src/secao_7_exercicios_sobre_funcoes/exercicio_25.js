// * ATIVIDADE *
// escreva uma função que recebe um numero, e o decrementa de 1 em 1 com um loop
//alem disso imprima os numero pares no console


function numerosPar(num) {
    for (let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(i)
        } 
        
    }
}

numerosPar(15);
numerosPar(883);
numerosPar(48);



