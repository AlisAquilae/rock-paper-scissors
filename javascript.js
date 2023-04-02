const gameChoice = ["rock", "paper", "scissors"]

function getComputerChoice(choice) {
    return Math.floor(Math.random() * gameChoice.length);
};


const playerSelection = "roCk";
const computerSelection = getComputerChoice();
console.log(computerSelection);


const playerSelectionComputed = playerSelection.toLowerCase()
console.log(playerSelectionComputed)  


function playRoundTwo(playerSelectionComputed, computerSelection) {
    if (playerSelectionComputed == "rock" && computerSelection == 0) {
        return "It's a tie! Go agane";
    } else if (playerSelectionComputed == "rock" && computerSelection == 1) {
        return "You lost! Better luck net time";
    } else if (playerSelectionComputed == "rock" && computerSelection == 2) {
        return "You've won! Ha, beats them!";
    } else {
        return "Oh no! Something went terribly wrong!";
    }
}

console.log(playRoundTwo(playerSelectionComputed, computerSelection));



/*
function playRound(playerSelection, computerSelection) {
    switch (playerSelectionComputed, computerSelection) {
        case playerSelectionComputed === "rock" && computerSelection === 0:
            return "It's a tie! Go agane";
            break;
        case playerSelectionComputed === "rock" && computerSelection === 1:
            return "You lost! Better luck next time";
            break;
        case playerSelectionComputed === "rock" && computerSelection === 2:
            return "You've won! Ha, beats them!";
            break;
        case playerSelectionComputed === "paper" && computerSelection === 0:
            return "You've won! Ha, beats them!";
            break;
        case playerSelectionComputed === "paper" && computerSelection === 1:
            return "It's a tie! Go agane";
            break;
        case playerSelectionComputed === "paper" && computerSelection === 2:
            return "You lost! Better luck next time";
            break;
        case playerSelectionComputed === "scissors" && computerSelection === 0:
            return "You lost! Better luck next time";
            break;
        case playerSelectionComputed === "scissors" && computerSelection === 1:
            return "You've won! Ha, beats them!";
            break;
        case playerSelectionComputed === "scissors" && computerSelection === 2:
            return "It's a tie! Go agane";
            break;
        default:
            return "X";
            console.log("Oh no! Something went terribly wrong!");
    } 
} 


console.log(playRound(playerSelection, computerSelection));
*/