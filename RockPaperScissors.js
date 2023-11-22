// Rock Paper Scissors

console.log("Hello World!")

const choices = ["Rock", "Paper", "Scissors"];

let computerSelection = getComputerChoice(choices);

let playerSelection = getPlayerChoice(choices);

let result = playRound(computerSelection, playerSelection);

console.log(result);


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

    if(playerSelection === computerSelection)
            return "Draw! No Winner";
    else if(playerSelection === "Rock" && computerSelection === "Scissors")
            return ("You Win! " + playerSelection + " beats " + computerSelection);
    else if(playerSelection === "Paper" && computerSelection === "Rock")
            return ("You Win! " + playerSelection + " beats " + computerSelection);
    else if(playerSelection === "Scissors" && computerSelection === "Paper")
            return ("You Win! " + playerSelection + " beats " + computerSelection);
    else
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
}