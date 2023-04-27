// returns either rock, paper, or scissors randomly
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"];
    let valuesToTest = values[Math.floor(Math.random() * values.length)];
    return valuesToTest;
}

// plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "You tied!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "You tied!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper!"
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "You tied!";
    } else {
        return "Something went wrong...";
    }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

