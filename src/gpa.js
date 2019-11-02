const readlineSync = require("readline-sync");

const letterGrade = String(readlineSync.question("\nEnter a letter grade: "));

if (letterGrade != ("A+" || "a+" || "A" || "a" || "A-" || "a-" || "B+" || "b+" || "B" || "b" || "B-" || "b-" || "C+" || "c+" || "C" || "c" || "C-" || "c-" || "D+" || "d+" || "D" || "d" || "D-" || "d-" || "F" || "f")) {
    console.log("\nInvalid.");
//this makes everything invalid.
} else {
    switch (letterGrade) {

      case "A":
      case "a":
      case "A+":
      case "a+":
        console.log("\nYour GPA is 4.00.");
        break;

      case "A-":
      case "a-":
        console.log("\nYour GPA is 3.67.");
        break;

      case "B+":
      case "b+":
        console.log("\nYour GPA is 3.33.");
        break;

      case "B":
      case "b":
        console.log("\nYour GPA is 3.00.");
        break;

      case "B-":
      case "b-":
        console.log("\nYour GPA is 2.67.");
        break;

      case "C+":
      case "c+":
        console.log("\nYour GPA is 2.33.");
        break;

      case "C":
      case "c":
        console.log("\nYour GPA is 2.00.");
        break;

      case "C-":
      case "c-":
        console.log("\nYour GPA is 1.67.");
        break;

      case "D+":
      case "d+":
        console.log("\nYour GPA is 1.33.");
        break;

      case "D":
      case "d":
        console.log("\nYour GPA is 1.00.");
        break;

      case "D-":
      case "d-":
        console.log("\nYour GPA is 0.67.");
        break;

      case "F":
      case "f":
        console.log("\nYour GPA is 0.00.");
        break;
    }
}
