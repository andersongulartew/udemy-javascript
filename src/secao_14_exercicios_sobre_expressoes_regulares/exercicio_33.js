// * ATIVIDADE *
// crie uma regex que aceite a seguinte expressão "Marca:nomeDaMarca";
// onde nomeDaMarca pode varia para Nike, Adidas, Puma, Asics;
//depois teste;

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asd"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("123132"));
console.log(validaMarca.test("Marca: Puma"));