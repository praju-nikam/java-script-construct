/*
Que 1 : Randonm Function to getSingle Digit
*/
console.log(Math.floor(Math.random() * 10));

// Que 2 : Randomn to get number between 1 and 6
console.log(Math.floor(Math.random() * 6 + 1));

//Que 3 : Add 2 random dice numbers
let number1 = Math.floor(Math.random() * 6 + 1);
console.log("The number of dice 1 = " + number1);
let number2 =  Math.floor(Math.random() * 6 + 1);
console.log("The number of dice 2 = " + number2);
let sum = number1 + number2;
console.log("The sum of two dice = " + sum);
