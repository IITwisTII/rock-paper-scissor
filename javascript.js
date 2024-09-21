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

let playerchoice = document.querySelector("#playerchoice");

playerchoice.addEventListener('click', (event) => {
    let target = event.target
    const computerchoice = getComputerChoice()
    humanchoice = target.id
    console.log(`You chose ${humanchoice} and the computer chose ${computerchoice}`);
    playRound(humanchoice, computerchoice)
    console.log("Your score:", humanscore)
    console.log("Computer score:", computerscore)
    if (humanscore == 5 || computerscore == 5) {
        if (humanscore > computerscore) {
            console.log("You win the game")
        } else if (humanscore < computerscore) {
            console.log("You lose the game")
        }
        humanscore = 0;
        computerscore = 0;
    }
    
})






