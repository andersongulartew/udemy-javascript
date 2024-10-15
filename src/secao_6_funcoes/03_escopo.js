let y = 10;

function imprimir() {
    let y = 150;
    console.log(y);
}
imprimir()

console.log(y)


// __________________________________________

let x = 10;

if (x > 5) {
    let x = 20;
    x++;
    console.log(x); // escopo if
}

console.log(x)  // escopo global fora do if

