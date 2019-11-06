const readlineSync = require("readline-sync");

const month = readlineSync.question("\nEnter a month: ");
const monthEntered = month.toLowerCase();

switch (monthEntered) {
  case "january":
  case "jan":
    console.log("\n31 days.\n");
    break;
  case "february":
  case "feb":
    console.log("\n28 or 29 days.\n");
    break;

  case "march":
  case "mar":
    console.log("\n31 days.\n");
    break;

  case "april":
  case "apr":
    console.log("\n30 days.\n");
    break;

  case "may":
    console.log("\n31 days.\n");
    break;

  case "june":
  case "jun":
    console.log("\n30 days.\n");
    break;

  case "july":
  case "jul":
    console.log("\n31 days.\n");
    break;

  case "august":
  case "aug":
    console.log("\n31 days.\n");
    break;

  case "september":
  case "sep":
    console.log("\n30 days.\n");
    break;

  case "october":
  case "oct":
    console.log("\n31 days.\n");
    break;

  case "november":
  case "nov":
    console.log("\n30 days.\n");
    break;

  case "december":
  case "dec":
    console.log("\n31 days.\n");
    break;

  default:
    console.log("\nInvalid.\n");
    break;
}
