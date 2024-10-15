class Cachorro {
    constructor(raca,cor){
    this.raca = raca;
    this.cor = cor;
}
}

Cachorro.prototype.patas = 4

let labrador = new Cachorro("labrador");

console.log(labrador.patas)