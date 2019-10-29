const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;


const QUARTER_VALUE = 25;
const DIME_VALUE = 10;
const NICKEL_VALUE = 5;
const PENNY_VALUE = 1;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));


let quarterNumber = 0;
let dimeNumber = 0;
let nickelNumber = 0;
let pennyNumber = 0;

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
      let numberCents = amount * 100;
      quarterNumber = Math.floor(numberCents/QUARTER_VALUE);
      numberCents = (numberCents%QUARTER_VALUE);

      dimeNumber = Math.floor(numberCents/DIME_VALUE);
      numberCents = (numberCents % DIME_VALUE);

      nickelNumber = Math.floor(numberCents/NICKEL_VALUE);
      numberCents = (numberCents % DIME_VALUE);

      pennyNumber = numberCents/PENNY_VALUE;

    console.log(`\n${quarterNumber} quarters, ${dimeNumber} dimes, ${nickelNumber}  nickels, and ${pennyNumber} pennies.`)
}
