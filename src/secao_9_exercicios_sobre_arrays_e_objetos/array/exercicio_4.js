// * ATIVIDADE *
// crie dois arrays, uma com mais e 5 elementos e outro com menos;
// faça uma função que verifique o numero de elementos;
// se possuir menos de 5 imprima "poucos elementos";
// se possuir mais de 5 imprima "muitos elementos"



let numeros1 = [5,9,7,6,4,55];
let numeros2 = [5,9,7];

function verificador(arr){
 if (arr.length > 5) {
    console.log(" Possui Muitos Elementos")
 } else {
    console.log(" Possui Poucos Elementos")
 }
}

verificador(numeros1);

verificador(numeros2);