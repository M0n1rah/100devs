// *Variables*
// Create a variable and console log the value
let name = "moni";
console.log(name);

// Create a variable, add 10 to it, and alert the value
let num = 0;
num += 10;
alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractNums (numOne, numTwo, numThree, numFour) {
    let diff = numOne - numTwo - numThree - numFour;
    alert(diff);
}

console.log(subtractNums(5, 4, 3, 2));

// Create a function that divides one number by another and returns the remainder
function numRemainder (numOne, numTwo) {
    let remainder = numOne % numTwo;
    return remainder;
}

console.log(numRemainder(15, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNums (numOne, numTwo) {
    let result = numOne + numTwo;
    if (result > 50) {
        alert("Jumanji!");
    }
}

console.log(addNums(10, 60));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebraYellin (numOne, numTwo, numThree) {
    let result = numOne * numTwo * numThree;

    if (result % 3 === 0) {
        alert("ZEBRA!");
    }
}

console.log(zebraYellin(1, 1, 27));
