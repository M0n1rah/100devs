// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 10;
alert(num);

// Create a variable, divide it by 10, and console log the value
let numAgain = 10;
numAgain /= 10;
console.log(numAgain);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function numMultiply (numOne, numTwo, numThree) {
    let product = numOne * numTwo * numThree;
    console.log(product);
}

console.log(numMultiply(3 * 2 * 1));

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function numMath (numOne, numTwo, numThree, numFour) {
    let result = (numOne + numTwo) - numThree - numFour;
    console.log(result);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winner (numOne, numTwo, numThree) {
    let num = ((100 + numOne) - numTwo ) / numThree;
    if (num > 25) {
        console.log("WE HAVE A WINNA");
    }
}

console.log(winner(3, 3, 3));

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekendAlert (str) {
    let day = str.toLowerCase();

    if (day === "saturday" || day === "sunday") {
        alert("weekend");
    } else if (day !== "monday" && day !== "tuesday" && day !== "wednesday" && day !== "thursday" && day !== "friday" && day !== "saturday" && day !== "sunday") {
        alert("Try again!");
    } else {
        alert("week day");
    }
}

console.log(weekendAlert(""));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function counting (num) {
    let count = 1;
    do {
        console.log(count);
        count += 3;
    } while (count <= num);
}

console.log(counting(6));

function fizzBuzz () {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz());
