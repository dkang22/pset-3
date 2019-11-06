const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
const farFreezing = 32;
const farBoiling = 212;
const celFreezing = 0;
const celBoiling = 100;
const kelFreezing = 273.15;
const kelBoiling = 373.15;

const temperatureEntered = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));
let scaleEntered = scale.toLowerCase();

if (Number.isNaN(temperatureEntered)) {
    console.log("\nInvalid.");
} else if (temperatureEntered < MIN || temperatureEntered > MAX) {
    console.log("\nInvalid.");
} else {
    switch (scaleEntered) {
      case "f":
        if (temperatureEntered >= farBoiling) {
            console.log("\nGas.");
        } else if (temperatureEntered <=farFreezing) {
            console.log("\nSolid.");
        } else {
            console.log("\nLiquid.");
        }
        break;
      case "c":
        if (temperatureEntered >= celBoiling) {
            console.log("\nGas.");
        } else if (temperatureEntered <= celFreezing) {
            console.log("\nSolid.");
        } else {
            console.log("\nLiquid.");
        }
        break;
      case "k":
        if (temperatureEntered >= kelBoiling) {
            console.log("\nGas.");
        } else if (temperatureEntered <= kelFreezing) {
            console.log("\nSolid.");
        } else {
            console.log("\nLiquid.");
        }
        break;
      default:
        console.log("\nInvalid.");
        break;
    }
}
