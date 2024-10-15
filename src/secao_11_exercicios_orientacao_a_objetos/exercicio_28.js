// * ATIVIDADE *
// crie um objeto que simula um endereço de um cliente;
// propriedades: Rua, Bairro, Cidade e Estado;
// no construtor o endereço já deve ser definido por completo;
// crie metodos para atualizar todas as propriedades;

class endereco {
    constructor(Rua, Bairro, Cidade, Estado){
        this.Rua = Rua;
        this.Bairro = Bairro;
        this.Cidade = Cidade;
        this.Estado = Estado
    }

    set novaRua(novaRua){
        this.Rua = novaRua
    }

    set novoBairro(novoBairro){
        this.Bairro = novoBairro
    }

    set novaCidade(novaCidade){
        this.Cidade = novaCidade
    }

    set novoEstado(novoEstado){
        this.Estado = novoEstado
    }
}

let informacao = new endereco( "São Pedro", "Cavalhada", "Porto Alegre","RS")

console.log(informacao)

informacao.novaRua = "Tapir Rocha";
informacao .novoBairro = "Cecilia";
informacao.novaCidade = "Viamão";
informacao.novoEstado = "RS";

console.log(informacao)