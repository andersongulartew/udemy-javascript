// uma forma de uma função receber indefinidos parâmetros;
// o operador rest vai virar im array;
// o parametro é difinido por:...nome

let num = 5;
let num1 = 2;
let num2 = 10;
let num3 = 6;

function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++) {
            console.log(args[i]) ;
        
    }
}
imprimirNumeros(num,num1,num2,num3);
console.log("pause");
imprimirNumeros(num2,num3);
console.log("pause");
imprimirNumeros(2,6,7,8,9,5)
