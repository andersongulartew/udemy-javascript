// podemos chamar a função em JS sem o numero igual de parametros determinados;

function nomeComIdade(nome, idade) {
    if (idade === undefined) {
        console.log("Seu nome é " + nome)
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos")
    }
}
nomeComIdade("joão");
nomeComIdade("joão", 42);

// ___________________________________________________________________________

function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Esta função precisa ter dois argumentos")
    } else {
        return a + b
    }
}
console.log(soma(1));
console.log(soma(1,2));