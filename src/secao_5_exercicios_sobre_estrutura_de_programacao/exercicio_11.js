

//  * ATIVIDADE *

// faça uma estrutura if/else para verificar se um usuario pode dirigir;
// armazene em variaveis informação sobre o usuario: idade, se tem CNH;
// se a idade for maior que 18  e nao possuir CNH, exiba mensagem;
// se a idade for maior que 18 e tem CNH, exiba uma mensagem
// se não tiver 18 e nem CNH, exiba uma mensagem;

let idade = 30
let cnh = true

if (idade >= 18 && cnh === false) {
    console.log("Você nao possui autorização para dirigir !")
}else if(idade >= 18 && cnh === true){
    console.log("Você possui autorização para dirigir !")
}else{
    console.log("Você nao possui autorização e nem idade minima para dirigir !")
}