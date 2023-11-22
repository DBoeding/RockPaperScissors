// Rock Paper Scissors

console.log("Hello World!");

const choices = ["Rock", "Paper", "Scissors"];
let win = 0, lose = 0, draw = 0;

let rounds = prompt("How many rounds would you like to play?");

for(let i = 0; i < rounds; i++)
{
    game();
}

console.log("Wins: " + win);
console.log("Loses: " + lose);
console.log("Draw: " + draw);


function game(){
    let computerSelection = getComputerChoice(choices);

    let playerSelection = getPlayerChoice(choices);

    let result = playRound(computerSelection, playerSelection);

    console.log(result);

}

function getComputerChoice(choices) {
    let randomSelection = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[randomSelection];
    return computerChoice;
}

function getPlayerChoice(choices){
    let playerChoice = prompt("Enter your selection: Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt().toUpperCase() + playerChoice.slice(1);
       return playerChoice;
}

function playRound(computerSelection, playerSelection){

    if(playerSelection === computerSelection){
            draw++;
            return "Draw! No Winner";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
            win++;
            return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
            win++;
            return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
            win++;
            return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else{
        lose++;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
}

