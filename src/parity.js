const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const numberEntered = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(numberEntered)) {
    console.log("\nInvalid.");
} else if (numberEntered < MIN || numberEntered > MAX) {
    console.log("\nInvalid.");
} else if ((numberEntered - Math.floor(numberEntered))> 0) {
    console.log("\nInvalid.");
} else if (numberEntered % 2 === 0) {
    console.log("\nEven.");
} else {
    console.log("\nOdd.");
}
