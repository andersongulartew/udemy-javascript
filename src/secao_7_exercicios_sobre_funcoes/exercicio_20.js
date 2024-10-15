// * ATIVIDADE *
// escreva uma função que recebe a idade de uma pessoa;
// se ela tem mais de 18 anos ela pode entrar na auto escola,imprima uma mensagem;
// se ela tem menos de 18 anos ela não pode entrar na auto escola,imprima uma mensagem;



function autoEscola(idade) {
    if (idade >= 18) {
        console.log(`Já possui ${idade} anos, pode iniciar na auto escola`)
    } else {
        console.log(`Você  tem ${idade} anos, ainda não pode iniciar na auto escola`)
    }
}
autoEscola(18);
autoEscola(17);