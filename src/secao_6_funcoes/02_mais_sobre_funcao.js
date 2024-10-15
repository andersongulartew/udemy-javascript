function soma(a,b) {
    return a + b
}
console.log(soma(5,3));

//___________________________________

function multiplicarTresNumeros(x,y,z) {
    return x * y * z
}
console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);
console.log("O valor de mult é : " + mult);

//_______________________________________

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir") 
    }
}
console.log(podeDirigir(19, true));
console.log(podeDirigir(25, 0));
console.log(podeDirigir(30, true));
console.log(podeDirigir(55, 0))