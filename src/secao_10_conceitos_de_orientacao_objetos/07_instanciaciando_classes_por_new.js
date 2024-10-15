function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuu")
    }    
}

let husky = new Cachorro("husky", 4, "marrom");
husky.uivar();