//randomly returns rock, paper, or scissors
function getComputerChoice() {
    let values = ['Rock', 'Paper', 'Scissors'];
    let randomValues = values[Math.floor(Math.random() * values.length)];
    return randomValues;
}

//keeps track of scores
let playerScore = 0;
let computerScore = 0;

//plays a single game of rock paper scissors
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors!';
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock!';
        playerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper!';
        playerScore += 1;
    } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats Scissors!';
        computerScore += 1;
    } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats Rock!';
        computerScore += 1;
    } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats Paper!';
        computerScore += 1;
    } else {
        return 'You tied!';
        playerScore += 1;
        computerScore += 1;
    }
}

//Keeps track of the winner
function winner() {
    if (playerScore > computerScore) {
        return "You win! You destroyed the computer!";
    } else if (computerScore > playerScore) {
        return 'You lose! The computer really destroyed you huh?';
    } else {
        return 'You tied!';
    }
}











