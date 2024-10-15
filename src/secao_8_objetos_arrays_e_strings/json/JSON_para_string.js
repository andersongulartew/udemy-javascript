//  podemos converter o JSON para uma string, ou tambem uma string para JSON

const carro ={
    "marca": "BMW",
    "portas": 4,
    "cor": "branco",
    "tipo": "sedan"
}

// JSON para string
let jsonToString = JSON.stringify(carro);
console.log(jsonToString);

//  string para JSON
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);

