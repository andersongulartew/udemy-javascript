/* Caracteres especiais
.\d - Qualquer digito de caractere
.\w - Um caractere alfanumerico("teste")
.\s - Qualquer caractere de espaço em branco

.\D - Caracteres que não são dígitos
.\W - Caractere não-alfanumerico
.\S - Caractere que não seja espaço em branco
.   - Qaulquer caractere,menos nova linha */


const pontoRegex = /./;
console.log(".");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const dRegex = /\d/;
console.log("d");
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

const dRegex2 = /\D/;
console.log("D");
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));


const sRegex = /\s/;
console.log("s");
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sa d"));


const wRegex = /\w/;
console.log("w");
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sa d"));
