const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice() {
    let values = [rock, paper, scissors];
    let valueToUse = values[Math.floor(Math.random() * values.length)];
    alert(valueToUse);
}

getComputerChoice();

