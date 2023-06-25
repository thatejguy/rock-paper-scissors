//randomly returns either rock, paper, or scissors
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"];
    let randomValues = values[(Math.random() * values.length) | 0];
    return randomValues;
}

