const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("\nEnter three numbers.")
const firstNumber = Number(readlineSync.question("\n"));
const secondNumber = Number(readlineSync.question(""));
const thirdNumber = Number(readlineSync.question(""));

if (Number.isNaN(firstNumber || secondNumber || thirdNumber)) {
    console.log("\nInvalid.\n");
} else if ((firstNumber || secondNumber || thirdNumber) < MIN || (firstNumber || secondNumber || thirdNumber) > MAX) {
    console.log("\nInvalid.\n");
} else if ((firstNumber < secondNumber) && (secondNumber < thirdNumber)) {
    console.log("\nStrictly increasing.\n");
} else if ((firstNumber <= secondNumber && secondNumber < thirdNumber) || (firstNumber < secondNumber && secondNumber <= thirdNumber)) {
    console.log("\nIncreasing.\n");
} else if ((firstNumber > secondNumber) && (secondNumber > thirdNumber)) {
    console.log("\nStrictly decreasing.\n");
} else if ((firstNumber >= secondNumber) && (secondNumber > thirdNumber) || (firstNumber > secondNumber) && (secondNumber >= thirdNumber)) {
    console.log("\nDecreasing.\n");
} else if ((firstNumber === secondNumber) && (secondNumber === thirdNumber)) {
    console.log("\nEqual.\n");
} else {
    console.log("\nUnordered.\n");
}
