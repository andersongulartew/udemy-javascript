const cachorro ={
    raca: "SRD",
    setRaca: function (raca) {
        this.raca = raca
    },
    getRaca: function () {
        return "A raça é " + this.raca
    },
    uivar: function () {
        console.log("Auuuuuuuuuuuu")
    },
    latir: function () {
        console.log("Au Au")
    }
}

cachorro.setRaca("Pastor Alemão");
console.log(cachorro.raca);

console.log(cachorro.getRaca( ))