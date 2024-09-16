let humanscore = 0;
let computerscore = 0;

function getComputerChoice() {
    randomnum = Math.random()
    if (randomnum <= 1/3) {
        computerchoice = "rock"
    } else if (randomnum > 1/3 && randomnum <= 2/3) {
        computerchoice = "paper"
    } else if (randomnum > 2/3) {
        computerchoice = "scissor"
    }
    return computerchoice;
}

function getHumanChoice() {
    humanchoice = prompt("humanchoice:")
    humanchoice = humanchoice.toLowerCase()
    if (humanchoice == "rock" || humanchoice == "scissor" || humanchoice == "paper") {
        humanchoice = humanchoice
    } else {
        return console.error("Invalid humanchoice");
    }
    return humanchoice.toLowerCase();
}

function playRound(humanchoice, computerchoice) {
    if (humanchoice == computerchoice) {
        console.log("Draw")
        humanscore = humanscore;
        computerscore = computerscore;
    } else if (humanchoice == "rock" && computerchoice == "scissor") {
        console.log("You win")
        humanscore++;
    } else if (humanchoice == "paper" && computerchoice == "rock") {
        console.log("You win")
        humanscore++;
    } else if (humanchoice == "scissor" && computerchoice == "paper") {
        console.log("You win")
        humanscore++;
    } else if (computerchoice == "rock" && humanchoice == "scissor") {
        console.log("You lose")
        computerscore++;
    } else if (computerchoice == "paper" && humanchoice == "rock") {
        console.log("You lose")
        computerscore++;
    } else if (computerchoice == "scissor" && humanchoice == "paper") {
        console.log("You lose")
        computerscore++;
    }
}

function playGame() {
    humanscore = 0;
    computerscore = 0;

    for (let round = 0; round < 5; round++) {
        console.log(`Round ${round + 1}:`);
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }
    
    console.log("Your score: ", humanscore)
    console.log("Computer Score: ", computerscore)

    if (humanscore > computerscore) {
        console.log("You win the game")
    } else if (humanscore < computerscore) {
        console.log("You lose the game")
    }
}

playGame();





