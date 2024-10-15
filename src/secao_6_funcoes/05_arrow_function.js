let consoleTeste = () => {
    console.log("Olá mundo")
};
consoleTeste();


let soma = (a,b) => {
    return a + b;
};
console.log(soma(10,20));

// ________________________________
// se só tiver um parametro podemos remover os parentes do argumento e o return;
// se a expressão for pequena, pode até ser feita em uma lina sem prejudicar a leitura do condigo;

const multiplicadorPorDois = (x) => {
    return x * 2;
};
console.log(multiplicadorPorDois(2));



const multiplicadorPorDois2 = x => x * 2;
console.log(multiplicadorPorDois(4))