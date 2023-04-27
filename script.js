// randomly returns either rock, paper, or scissors
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"];
    let valuesToTest = values[Math.floor(Math.random() * values.length)];
    return valuesToTest;
}

//keeps track of scores
let aPlayerScore = 0;
let aComputerScore = 0;

//plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        aPlayerScore += 1;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        aPlayerScore += 1;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        aPlayerScore += 1;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        aComputerScore += 1;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        aComputerScore += 1;
        return "You lose! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        aComputerScore += 1;
        return "You lose! Rock beats Scissors!";
    } else {
        aPlayerScore +=1;
        aComputerScore +=1;
        return "You tied!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



