// randomly returns either rock, paper, or scissors
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"];
    let valuesToTest = values[Math.floor(Math.random() * values.length)];
    return valuesToTest;
}

//playes a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied!";
    } else {
        return "Something went wrong...";
    }
}

//puts random choice into computer selection
const computerSelection = getComputerChoice();

//plays 5 rounds of rock paper scissors
function game() {
    alert("Round 1");
    playerSelection = prompt("Please enter Rock, Paper, or Scissors: ", '');
    console.log(playRound(playerSelection, computerSelection));

    alert("Round 2");
    playerSelection = prompt("Please enter Rock, Paper, or Scissors: ", '');
    console.log(playRound(playerSelection, computerSelection));

    alert("Round 3");
    playerSelection = prompt("Please enter Rock, Paper, or Scissors: ", '');
    console.log(playRound(playerSelection, computerSelection));

    alert("Round 4");
    playerSelection = prompt("Please enter Rock, Paper, or Scissors: ", '');
    console.log(playRound(playerSelection, computerSelection));

    alert("Round 5");
    playerSelection = prompt("Please enter Rock, Paper, or Scissors: ", '');
    console.log(playRound(playerSelection, computerSelection));

}

//plays the game
game();

