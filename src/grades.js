const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const gradeValue = Number(readlineSync.question("\nEnter a grade: "));
let gradeLetter = "";

const A_THRESHOLD = gradeValue <= 100 && gradeValue >= 90;
const B_THRESHOLD = gradeValue < 90 && gradeValue >= 80;
const C_THRESHOLD = gradeValue < 80 && gradeValue >= 70;
const D_THRESHOLD = gradeValue < 70 && gradeValue >= 60;
const F_THRESHOLD = gradeValue < 60 && gradeValue >= 0;

if (Number.isNaN(gradeValue)) {
    console.log("\nInvalid.\n");
} else if (gradeValue < MIN || gradeValue > MAX) {
    console.log("\nInvalid.\n");
} else {
    if (A_THRESHOLD == true) {
        gradeLetter = "A";
    } else if (B_THRESHOLD == true) {
        gradeLetter = "B";
    } else if (C_THRESHOLD == true) {
        gradeLetter = "C";
    } else if (D_THRESHOLD == true) {
        gradeLetter = "D";
    } else if (F_THRESHOLD == true) {
        gradeLetter = "F";
    } else {
        console.log("\nInvalid.\n");
    }

    if (gradeLetter == "A") {
        console.log(`\nYou recieved an ${gradeLetter}.\n`);
    } else {
        console.log(`\nYou recieved a ${gradeLetter}.\n`);
    }
}
