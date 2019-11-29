const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let endLoop = false;
let num;

console.log();

while (endLoop === false) {
    num = Number(readlineSync.question("Positive integer: "));

    if (Number.isNaN(num) || num % 1 !== 0 || num < MIN || num > MAX) {
    }
    else {
        endLoop = true;
    }
}

let fib = 1;
let a = 0;
let b = 1;

for (let i = 2; i <= num; i++) {
    fib = a + b;
    a = b;
    b = fib;
}

fibComma = fib.toLocaleString("en");
console.log("\n" + fibComma + ".\n");
