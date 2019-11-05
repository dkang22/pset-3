const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
const farFreezing = 32;
const farBoiling = 212;
const celFreezing = 0;
const celBoiling = 100;
const kelFreezing = 273.15;
const kelBoiling = 373.15;
const scaleUsed = "";

const temperatureEntered = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));
let scaleEntered = scale.toLowerCase();

switch (scaleEntered) {
  case "f":
    scaleUsed = "Farenheit";
    break;
  case "c":
    scaleUsed = "Celsius";
    break;
  case "k":
    scaleUsed = "Kelvin";
    break;
}

if (Number.isNaN(temperatureEntered)) {
    console.log("\nInvalid.");
} else if (temperatureEntered < MIN || temperatureEntered > MAX) {
    console.log("\nInvalid.");
} else {
    switch (scaleUsed) {
      case "Farenheit":
        if (temperatureEntered >= farBoiling) {
          console.log("\nGas.");
        } else if (temperatureEntered <=farFreezing) {
          console.log("\nSolid.");
        } else {
          console.log("\nLiquid.");
        }
        break;
      case "Celsuis":
        if (temperatureEntered >= celBoiling) {
          console.log("\nLiquid.");
        }
        break;

    }
}
