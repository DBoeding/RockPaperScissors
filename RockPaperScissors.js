// Rock Paper Scissors

console.log("Hello World!")

const choices = ["Rock", "Paper", "Scissors"];

let computerSelection = getComputerChoice(choices);

let playerSelection = getPlayerChoice(choices);

playRound(computerSelection, playerSelection);


function getComputerChoice(choices) {
    let randomSelection = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[randomSelection];
    return computerChoice
}

function getPlayerChoice(choices){
    let playerChoice = prompt("Enter your selection: Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt().toUpperCase() + playerChoice.slice(1);
       return playerChoice;
}

function playRound(computerSelection, playerSelection){
    console.log("Computer choice: " + computerSelection);
    console.log("Player choice: " + playerSelection);

    if(playerSelection === computerSelection)
            console.log("Result is a draw");
    else if(playerSelection === "Rock" && computerSelection === "Scissors")
            console.log("player Wins");
    else if(playerSelection === "Paper" && computerSelection === "Rock")
            console.log("Player Wins");
    else if(playerSelection === "Scissors" && computerSelection === "Paper")
            console.log("Player Wins");
    else
        console.log("Computer Wins");
}