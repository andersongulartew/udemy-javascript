let promessa = Promise.resolve(4 + 8);

console.log("Algum código");

promessa.then((value) => console.log(`A soma é ${value}`));

//______________________________________________________________

let p = Promise.resolve(5+5);

console.log("Algum código");

p.then((value) => console.log(`A soma é ${value}`));

