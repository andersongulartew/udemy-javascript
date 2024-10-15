const reg1 = /[1,2,3,4,5]/;
console.log(reg1.test("Temos o número 6"));  // false
console.log(reg1.test("Temos o número 2")); //  true


const reg2 = /[0-9]/;
console.log(reg2.test("Temos o número 8"));
console.log(reg2.test("Temos o número "));

