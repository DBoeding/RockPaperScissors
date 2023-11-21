// Rock Paper Scissors

console.log("Hello World!")

const choices = ["Rock", "Paper", "Scissors"];

console.log (choices)
function getComputerChoice(choices) {
    let randomSelection = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[randomSelection];
    return computerChoice
}

let computerChoice = getComputerChoice(choices);
