// * ATIVIDADE *
// escreva uma função que detecta o tipo de dado passado;
// verifique se é um: number, boolean ou string;
// e retorne uma mensagem para cada tipo;

function tiposDeNomes(dado){
    if (typeof dado == "number") {
        console.log("Este dado é um number")
    } else if(typeof dado == "boolean") {
        console.log("Este dado é um boolean")
    }else{
        console.log("Este dado é um string")
    }
}



tiposDeNomes(25);
tiposDeNomes(true);
tiposDeNomes("Anderson");