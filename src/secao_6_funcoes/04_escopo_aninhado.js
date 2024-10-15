let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if (a > 10) {
        let a = 0;
        x++;
        console.log(a)  // escopo do if
    }
    console.log(a) // escopo da function
}
console.log(a)  // escopo global

multiplicar(3,7)