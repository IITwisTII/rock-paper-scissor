let humanscore = 0;
let computerscore = 0;

function getComputerChoice() {
    randomnum = Math.random()
    if (randomnum <= 1/3) {
        computerchoice = "rock"
    } else if (randomnum > 1/3 && randomnum <= 2/3) {
        computerchoice = "paper"
    } else if (randomnum > 2/3) {
        computerchoice = "scissors"
    }
    return computerchoice;
}

function getHumanChoice() {
    humanchoice = prompt("humanchoice:")
    humanchoice = humanchoice.toLowerCase()
    if (humanchoice == "rock" || humanchoice == "scissor" || humanchoice == "paper") {
        humanchoice == humanchoice
    } else {
        return console.error("Invalid humanchoice");
    }
    return humanchoice.toLowerCase();
}

function playRound(humanchoice, computerchoice) {
    //Check if Draw
    //Chech if one value is rock and the other is scissor and declare the value with rock the winner
    if (humanchoice == "rock" && computerchoice == "scissor") {
        console.log("You win")
        humanscore += 1;
    }
    //Rock > Scissor
    //Scissor > Paper
    //Paper > Rock
}

console.log(getHumanChoice())

