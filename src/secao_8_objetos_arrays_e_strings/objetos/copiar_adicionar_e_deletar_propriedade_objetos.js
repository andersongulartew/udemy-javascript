// deletar e adicionar

let pessoa = {
    nome: "Anderson",
    idade: 30,
    profissao: "assitente adm",
    
}

console.log(pessoa.nome);
delete pessoa.idade;  // deletar propriedade
console.log(pessoa);


pessoa.casado = true;  // adicionar propriedade
console.log(pessoa)

// ___________________________________________________

// copiar

let objetoA = {
    nome: "fabio",
    idade: 30,
}

let objetoB = {
    casado: true,
    escolaridade: "superior",
}

Object.assign(objetoA,objetoB)  // uniou os dois objetos
console.log(objetoA)

Object.assign(objetoB,objetoA) // uniou os dois objetos
console.log(objetoB)






