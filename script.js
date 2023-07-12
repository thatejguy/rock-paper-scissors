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
        playerScore += 1;
        alert('You picked rock, Computer picked scissors. You win!');
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore += 1;
        alert('You picked paper, Computer picked rock. You win!')
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        alert('You picked scissors, Computer picked paper. You win!');
        return 'You win! Scissors beats Paper!';
    } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
        computerScore += 1;
        return 'You lose! Rock beats Scissors!';
    } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
        computerScore += 1;
        return 'You lose! Paper beats Rock!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
        computerScore += 1;
        return 'You lose! Scissors beats Paper!';
    } else {
        playerScore += 1;
        computerScore += 1;
        return 'You tied!';
    }
}

//Keeps track of the winner
function winner() {
    if (playerScore > computerScore) {
        console.log("You win! Absolutely rolled the computa huh?");
    } else if (computerScore > playerScore) {
        console.log('You lose! Computa rekt you huh? Trash!');
    } else {
        console.log('You tied! Ehhhhhh?!');
    }
}

//selectors
const rockButton = document.querySelector('.rockbutton');
const paperButton = document.querySelector('.paperbutton');
const scissorsButton = document.querySelector('.scissorsbutton');

//events
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    console.log(playRound(playerSelection, computerSelection));
})













