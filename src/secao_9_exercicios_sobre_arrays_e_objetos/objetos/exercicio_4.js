// * ATIVIDADE *
// crie um objeto calculadora
// que tem os seguints métodos : somar, subtrair, multiplicar e dividir;
// os métodos só devem aceitar dois parâmetros;
// utilize um dos métodos e imrpima no console.log

let calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b){
        return a / b;
    }

}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(5,5))
console.log(calculadora.multiplicar(8,2))
console.log(calculadora.dividir(5,2))

