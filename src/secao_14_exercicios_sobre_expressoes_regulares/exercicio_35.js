// * ATIVIDADE *
// crie uma regex que valide nome de usuarios no sistena;
// aceite letras de a-z, _e -, números de 0-9,mínimo de 3 caracteres e máximo de 16
//depois teste;

let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("matheus_123"));

console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("11111111111111111111111111111"));