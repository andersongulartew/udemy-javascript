// * ATIVIDADE *
// crie uma regex que aceite só letras maiusculas;
//depois teste/

const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("testando"));
console.log(validarMaiuscula.test("123"));
console.log(validarMaiuscula.test("TESTANDO"));