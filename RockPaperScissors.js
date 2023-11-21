// Rock Paper Scissors

console.log("Hello World!")

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let randomSelection = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[randomSelection];
    return computerChoice
}

let computerSelection = getComputerChoice(choices);


function getPlayerChoice(choices){
    let playerChoice = prompt("Enter your selection: Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt().toUpperCase() + playerChoice.slice(1);
       return playerChoice;
}

let playerSelection = getPlayerChoice(choices);

