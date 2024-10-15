// * ATIVIDADE *
// crie um array a partir de uma frase
// imprima cada palavra do array no console.log por meio de um for;

let frase = "Ser um programador bom requer muita pratica";

const arrFrase = frase.split(" ")

for (let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i]);
    
}

