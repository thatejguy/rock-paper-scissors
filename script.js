//randomly returns either rock, paper, or scissors
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"];
    let randomValues = values[(Math.random() * values.length) | 0];
    return randomValues;
}

//keeps track of scores
let aPlayerScore = 0;
let aComputerScore = 0;

//plays one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        aPlayerScore += 1;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        aPlayerScore += 1;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        aPlayerScore += 1;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        aComputerScore += 1;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        aComputerScore += 1;
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        aComputerScore += 1;
        return "You lose! Rock beats Scissors!";
    } else {
        aPlayerScore +=1;
        aComputerScore += 1;
        return "You tied!";
    }
}

//keeps track of the winner
function winner() {
    if (aPlayerScore > aComputerScore) {
        console.log("You win! You destroyed the computer huh?");
    } else if (aComputerScore > aPlayerScore) {
        console.log("You lose! The computer wrecked you huh?");
    } else {
        console.log("You both tied!");
    }
}

//constant variables
const playerSelection = prompt('Please enter either Rock, Paper, or Scissors: ');
const computerSelection = getComputerChoice();
