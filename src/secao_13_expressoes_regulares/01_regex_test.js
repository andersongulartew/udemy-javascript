const reg1 = new RegExp("bola");

console.log(reg1.test("tem bola?")); // true porque tem a palavvra bola na const. reg1
console.log(reg1.test("Não tem"));



const reg2 = /bola/;
let text = "Tem bola na cesta";

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("45456454quadrado465465465"));


