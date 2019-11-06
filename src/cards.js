const readlineSync = require("readline-sync");

const cardEntered = String(readlineSync.question("\nEnter a playing card: "));
const cardRank = cardEntered.charAt(0).toUpperCase();
const cardSuit = cardEntered.charAt(1).toUpperCase();
let rankDisplay = "";
let suitDisplay = "";

switch (cardRank) {
  case "2":
    rankDisplay = "Two";
    break;
  case "3":
    rankDisplay = "Three";
    break;
  case "4":
    rankDisplay = "Four";
    break;
  case "5":
    rankDisplay = "Five";
    break;
  case "6":
    rankDisplay = "Six";
    break;
  case "7":
    rankDisplay = "Seven";
    break;
  case "8":
    rankDisplay = "Eight";
    break;
  case "9":
    rankDisplay = "Nine";
    break;
  case "10":
    rankDisplay = "Ten";
    break;
  case "J":
    rankDisplay = "Jack";
    break;
  case "Q":
    rankDisplay = "Queen";
    break;
  case "K":
    rankDisplay = "King";
    break;
  case "A":
    rankDisplay = "Ace";
    break;
  default:
    rankDisplay = null;
    break;
}

switch (cardSuit) {
  case "C":
    suitDisplay = "Clubs";
    break;
  case "D":
    suitDisplay = "Diamonds";
    break;
  case "H":
    suitDisplay = "Hearts";
    break;
  case "S":
    suitDisplay = "Spades";
    break;
  default:
    suitDisplay = null;
}

if (rankDisplay == null || suitDisplay == null) {
  console.log("\nInvalid.\n");
} else {
  console.log(`\n${rankDisplay} of ${suitDisplay}.\n`);
}
