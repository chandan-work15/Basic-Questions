//Swaping with third variable

let a = parseInt(prompt("enter number : "));
let b = parseInt(prompt("enter number : "));

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a}, b = ${b}`);