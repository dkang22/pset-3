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
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    let quarterDisplay;
    let dimeDisplay;
    let nickelDisplay;
    let pennyDisplay;
    let numberCents = amount * 100;

    quarterNumber = Math.floor(numberCents/QUARTER_VALUE);
    numberCents = (numberCents % QUARTER_VALUE);
    if (quarterNumber === 1) {
      quarterDisplay = (quarterNumber + " quarter, ");
    } else  {
      quarterDisplay = (quarterNumber + " quarters, ");
    }

    dimeNumber = Math.floor(numberCents/DIME_VALUE);
    numberCents = (numberCents % DIME_VALUE);
    if (dimeNumber === 1) {
      dimeDisplay = (dimeNumber + " dime, ");
    } else  {
      dimeDisplay = (dimeNumber + " dimes, ");
    }

    nickelNumber = Math.floor(numberCents/NICKEL_VALUE);
    numberCents = (numberCents % NICKEL_VALUE);
    if (nickelNumber === 1) {
      nickelDisplay = (nickelNumber + " nickel, ");
    } else  {
      nickelDisplay = (nickelNumber + " nickels, ");
    }

    pennyNumber = (numberCents/PENNY_VALUE);
    if (pennyNumber === 1) {
      pennyDisplay = ("and " + pennyNumber + " penny.");
    } else  {
      pennyDisplay = ("and " + pennyNumber + " pennies.");
    }

    console.log("\n" + quarterDisplay + dimeDisplay + nickelDisplay + pennyDisplay);
}
