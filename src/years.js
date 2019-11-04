const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const yearEntered = Number(readlineSync.question("\nEnter a year: "));

if (Number.isNaN(yearEntered)) {
    console.log("\nInvalid.");
} else if (yearEntered < MIN || yearEntered > MAX) {
    console.log("\nInvalid.");
} else if (yearEntered % 4 === 0) {
    console.log("\n" + yearEntered + " is a leap year.");
} else if (yearEntered % 4 === 1) {
    console.log("\n" + yearEntered + " is not a leap year.");
} else if (yearEntered % 4 === 2) {
    console.log("\n" + yearEntered + " is not a leap year.");
} else if (yearEntered % 4 === 3) {
    console.log("\n" + yearEntered + " is not a leap year.");
} else {
    console.log("\nInvalid");
}
