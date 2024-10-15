// podemos definir variaveis com propriedades do objeto com uma notação diferente,chamada destructuring

const person = {
    nome :"anderson",
    sobrenome:"wodnoff"
}
const{nome: fnome, sobrenome: lnome} = person

console.log(fnome);
console.log(lnome);

//______________________________________________

const obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0"
}
const{rodas:vRodas, portas: vPortas, tetosolar: vTetosolar, motor: vMotor} = obj

console.log(vRodas);
console.log(vPortas);
console.log(vTetosolar);
console.log(vMotor);

