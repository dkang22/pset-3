const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const gradeValue = Number(readlineSync.question("\nEnter a grade: "));
let gradeLetter = "";

if (Number.isNaN(gradeValue)) {
  console.log("\nInvalid.");
} else if (gradeValue < MIN || gradeValue > MAX) {
  console.log("\nInvalid.");
} else {
  if (gradeValue <= 100 && gradeValue >= 90) {
      gradeLetter = "A";
  } else if (gradeValue <= 89 && gradeValue >=80) {
      gradeLetter = "B";
  } else if (gradeValue <= 79 && gradeValue >= 70) {
      gradeLetter = "C";
  } else if (gradeValue <= 69 && gradeValue >= 60) {
      gradeLetter = "D";
  } else {
      gradeLetter = "F";
  } if (gradeLetter == "A") {
      console.log(`\nYou recieved an ${gradeLetter}.`);
  } else {
      console.log(`\nYou recieved a ${gradeLetter}.`)
  }
}
