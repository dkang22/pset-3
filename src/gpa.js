const readlineSync = require("readline-sync");

const letterGrade = String(readlineSync.question("\nEnter a letter grade: "));

switch (letterGrade) {
  case "A":
  case "a":
  case "A+":
  case "a+":
    console.log("\nYour GPA is 4.00.\n");
    break;
  case "A-":
  case "a-":
    console.log("\nYour GPA is 3.67.\n");
    break;

  case "B+":
  case "b+":
    console.log("\nYour GPA is 3.33.\n");
    break;

  case "B":
  case "b":
    console.log("\nYour GPA is 3.00.\n");
    break;

  case "B-":
  case "b-":
    console.log("\nYour GPA is 2.67.\n");
    break;

  case "C+":
  case "c+":
    console.log("\nYour GPA is 2.33.\n");
    break;

  case "C":
  case "c":
    console.log("\nYour GPA is 2.00.\n");
    break;

  case "C-":
  case "c-":
    console.log("\nYour GPA is 1.67.\n");
    break;

  case "D+":
  case "d+":
    console.log("\nYour GPA is 1.33.\n");
    break;

  case "D":
  case "d":
    console.log("\nYour GPA is 1.00.\n");
    break;

  case "D-":
  case "d-":
    console.log("\nYour GPA is 0.67.\n");
    break;

  case "F":
  case "f":
    console.log("\nYour GPA is 0.00.\n");
    break;

  default:
    console.log("\nInvalid.\n");
    break;
}
