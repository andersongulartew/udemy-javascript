const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));

const az = /[a-z]/;

console.log(az.test("asd123asdad"));
console.log(az.test("1213545"));