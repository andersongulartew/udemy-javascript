// * ATIVIDADE *
// escreva uma funçao que recebe uma string
// se o texto conter mais de 10 caracteres imprima "Texto muito longo"
// se o texto conter menos de 10 caracteres imprima "Texto dentro do limite"

function numeroDeCaracteres(string) {
    if (string.length > 10) {
        console.log("Texto muito longo")
    } else {
        console.log("Texto dentro do limite")
    }

    
}

numeroDeCaracteres("teste");
numeroDeCaracteres("moro em viamao");