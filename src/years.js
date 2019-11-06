const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const yearEntered = Number(readlineSync.question("\nEnter a year: "));

if (Number.isNaN(yearEntered)) {
    console.log("\nInvalid.\n");
} else if (yearEntered < MIN || yearEntered > MAX) {
    console.log("\nInvalid.\n");
} else if (yearEntered % 4 === 0) {
    if (yearEntered % 400 === 0) {
        console.log("\n" + yearEntered + " is a leap year.\n");
    } else if (yearEntered % 100 === 0) {
        console.log("\n" + yearEntered + " is not a leap year.\n");
    } else {
          console.log("\n" + yearEntered + " is a leap year.\n");
    }
} else if (yearEntered % 4 === 1) {
    console.log("\n" + yearEntered + " is not a leap year.\n");
} else if (yearEntered % 4 === 2) {
    console.log("\n" + yearEntered + " is not a leap year.\n");
} else if (yearEntered % 4 === 3) {
    console.log("\n" + yearEntered + " is not a leap year.\n");
} else {
    console.log("\nInvalid");
}
