const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;
const A_THRESHOLD = gradeValue <= 100 && gradeValue >= 90;
const B_THRESHOLD = gradeValue < 90 && gradeValue >=80;
const C_THRESHOLD = gradeValue < 80 && gradeValue >= 70;
const D_THRESHOLD = gradeValue < 70 && gradeValue >= 60;
const F_THRESHOLD = gradevalue < 60;

const gradeValue = Number(readlineSync.question("\nEnter a grade: "));
let gradeLetter = "";

if (Number.isNaN(gradeValue)) {
  console.log("\nInvalid.\n");
} else if (gradeValue < MIN || gradeValue > MAX) {
  console.log("\nInvalid.\n");
} else {
  if (gradeValue <= 100 && gradeValue >= 90) {
      gradeLetter = "A";
  } else if (gradeValue < 90 && gradeValue >=80) {
      gradeLetter = "B";
  } else if (gradeValue < 80 && gradeValue >= 70) {
      gradeLetter = "C";
  } else if (gradeValue < 70 && gradeValue >= 60) {
      gradeLetter = "D";
  } else {
      gradeLetter = "F";
  } if (gradeLetter == "A") {
      console.log(`\nYou recieved an ${gradeLetter}.\n`);
  } else {
      console.log(`\nYou recieved a ${gradeLetter}.\n`);
  }
}
