let pessoa = {
    "nome": "Anderson",
    "idade": 30,
    "posicao": "Developer",
    "linguagens": ["PHP", "JavaScript", "python"]
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.posicao);
console.log(pessoa.linguagens);

let{nome: fNome, idade: fIdade, posicao: fPosicao, linguagens: fLinguagens} = pessoa
console.log(fNome);
console.log(fIdade);
console.log(fPosicao);
console.log(fLinguagens);

