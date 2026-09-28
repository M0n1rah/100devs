// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let numTwo = 33;
numTwo += 10;
alert(numTwo);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subNum (numOne, numTwo, numThree, numFour) {
    let diff = numOne - numTwo - numThree - numFour;
    alert(diff);
}

console.log(subNum(4, 5, 6, 7));

// Create a function that divides one number by another and returns the remainder
function divideNum (numOne, numTwo) {
    let remainder = numOne % numTwo;
    return remainder;
}

console.log(divideNum(4, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNum (numOne, numTwo) {
    let result = numOne + numTwo;
    if (result > 50) {
        alert("Jumanji");
    }
}

console.log(addNum(60, 1));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyNum (numOne, numTwo, numThree) {
    let result = numOne * numTwo * numThree;
    if (result % 3 === 0) {
        alert("ZEBRA");
    }
}

console.log(multiplyNum(27, 1, 1));

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum (str, num) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}

console.log(wordNum("hello", 3));
