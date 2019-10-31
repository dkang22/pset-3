const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const numberEntered = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(numberEntered)) {
    console.log("\nInvalid.");
} else if (numberEntered < MIN || numberEntered > MAX) {
    console.log("\nInvalid.");
} else if (numberEntered < 0) {
    console.log("\nNegative.");
} else if (numberEntered > 0) {
    console.log("\nPositive.");
} else {
    console.log("\nZero.");
}
