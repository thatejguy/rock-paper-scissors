//alert player
alert('First to 5 points wins!');

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
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        alert('You picked rock, Computer picked scissors. You win!');
        return 'You win! Rock beats Scissors!'
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore += 1;
        alert('You picked paper, Computer picked rock. You win!');
        return 'You win! Paper beats Rock!'
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        alert('You picked scissors, Computer picked paper. You win!');
        return 'You win! Scissors beats Paper!';
    } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
        computerScore += 1;
        alert('You picked scissors, Computer picked rock. You lose!');
        return 'You lose! Rock beats Scissors!';
    } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
        computerScore += 1;
        alert('You picked rock, Computer picked paper. You lose!');
        return 'You lose! Paper beats Rock!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
        computerScore += 1;
        alert('You picked paper, Computer picked scissors. You lose!');
        return 'You lose! Scissors beats Paper!';
    } else {
        playerScore += 1;
        computerScore += 1;
        alert('You both picked the same one!');
        return 'You tied!';
    }
}

//puts score in the dom
function score() {
    playerContainer.textContent = `Your score: ${playerScore}.`
    computerContainer.textContent = `Computer score: ${computerScore}.`
}

//selectors
const rockButton = document.querySelector('.rockbutton');
const paperButton = document.querySelector('.paperbutton');
const scissorsButton = document.querySelector('.scissorsbutton');

//events
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    eventContainer.textContent = playRound(playerSelection, computerSelection);
    score();
    winner();
});
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    eventContainer.textContent = playRound(playerSelection, computerSelection);
    score();
    winner();
});
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    eventContainer.textContent = playRound(playerSelection, computerSelection);
    score();
    winner();
});

//dom selectors
const eventContainer = document.querySelector('.event-container');
const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
const scoreContainer = document.querySelector('.score-container');

//keeps track of the winner
function winner() {
    if (playerScore === 5) {
        scoreContainer.textContent = "You win! Absolutely rolled the computa huh?";
    } else if (computerScore === 5) {
        scoreContainer.textContent = 'You lose! Computa rekt you huh? Trash!';
    } else if (playerScore === 5 && computerScore === 5) {
        scoreContainer.textContent = 'You tied! Ehhhhhh?!';
    } else {
        console.log('test');
    }
}






















