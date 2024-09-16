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
    if (humanchoice == computerchoice) {
        console.log("Draw")
    }  else if (humanchoice == "rock" && computerchoice == "scissor") {
        console.log("You win")
        humanscore += 1;
    } else if (humanchoice == "paper" && computerchoice == "rock") {
        console.log("You win")
        humanscore += 1;
    } else if (humanchoice == "scissor" && computerchoice == "paper") {
        console.log("You win")
        humanscore += 1;
    } else if (computerchoice == "rock" && humanchoice == "scissor") {
        console.log("You lose")
        computerscore += 1;
    } else if (computerchoice == "paper" && humanchoice == "rock") {
        console.log("You lose")
        computerscore += 1;
    } else if (computerchoice == "scissor" && humanchoice == "paper") {
        console.log("You lose")
        computerscore += 1;
    }
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
    if (humanscore > computerscore) {
        console.log("You win")
    } else if (humanscore < computerscore) {
        console.log("You lose")
    }
}

playGame();





