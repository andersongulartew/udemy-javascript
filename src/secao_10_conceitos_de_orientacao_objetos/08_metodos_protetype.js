function Cachorro(raca) {
    this.raca = raca;
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuu");
}

let pug = new Cachorro("Pug");

pug.uivar();


