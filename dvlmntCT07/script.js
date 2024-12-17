// console.log("Hello World");

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// const a = 5;
// const b = 7;

// const sum = a + b;
// console.log("Sum = "+sum);

// const x = parseInt(prompt("Enter a number a = "));
// const y = parseInt(prompt("Enter a number b = "));

// const sumession = x + y;
// console.log("Sum of " +x +" And " +y +" = " +sumession);

// sum of natural number

// const num = parseInt(prompt('Enter a num = '));

// let sum = 0;

// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
// }

// console.log("sum of " +num + " natural number = "+sum);

// swap of two number's

// let a = 5;
// let b = 6;

// let numOne = prompt("Enter number one : ");
// let numTwo = prompt("Enter number two : ");


// swapping two number's by using temperary varialbe
// let temp;

// temp = a;
// a = b;
// b = temp;

// let sumValue = Number(numOne) + Number(numTwo);

// numOne = sumValue - Number(numOne);
// numTwo = sumValue - Number(numTwo);

// console.log(numOne);
// console.log(numTwo);


// swapping two number's by using sum and substraction method
// let sum = a + b;
// a = sum - a;
// b = sum - b;

// console.log(a);
// console.log(b);

let a = 7;
let b = 9;

console.log(a, b);
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// let x = 12;
// let y = 13;

// const array = [x, y];
// console.log(array[0], array[1])
// [x, y] = [y, x];
// console.log(array[0], array[1])

console.log(a, b);

[a, b] = [b, a]

console.log(a, b);