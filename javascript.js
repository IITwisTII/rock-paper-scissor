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
    const roundresult = document.querySelector("#roundresult");
    roundresult.style.color = "blue";

    if (humanchoice == computerchoice) {
        roundresult.textContent ="Draw";
        humanscore = humanscore;
        computerscore = computerscore;
    } else if (humanchoice == "rock" && computerchoice == "scissor") {
        roundresult.textContent = "You win";
        humanscore++;
    } else if (humanchoice == "paper" && computerchoice == "rock") {
        roundresult.textContent = "You win";
        humanscore++;
    } else if (humanchoice == "scissor" && computerchoice == "paper") {
        roundresult.textContent = "You win";
        humanscore++;
    } else if (computerchoice == "rock" && humanchoice == "scissor") {
        roundresult.textContent = "You lose";
        computerscore++;
    } else if (computerchoice == "paper" && humanchoice == "rock") {
        roundresult.textContent = "You lose";
        computerscore++;
    } else if (computerchoice == "scissor" && humanchoice == "paper") {
        roundresult.textContent = "You lose";
        computerscore++;
    }
}

let playerchoice = document.querySelector("#playerchoice");

const DOMhumanscore = document.querySelector("#humanscore");

const DOMcomputerscore = document.querySelector("#computerscore");

const winner = document.querySelector("#winner");

playerchoice.addEventListener('click', (event) => {
    let target = event.target
    const computerchoice = getComputerChoice()
    humanchoice = target.id
    console.log(`You chose ${humanchoice} and the computer chose ${computerchoice}`);
    playRound(humanchoice, computerchoice)
    DOMhumanscore.textContent = `Your score: ${humanscore}`;
    DOMcomputerscore.textContent = `Computer score: ${computerscore}`;
    if (humanscore == 5 || computerscore == 5) {
        if (humanscore > computerscore) {
            winner.textContent = "You";
            winner.style.color = "green";
        } else if (humanscore < computerscore) {
            winner.textContent = "Computer";
            winner.style.color = "red";
        }
        humanscore = 0;
        computerscore = 0;
    }
})






