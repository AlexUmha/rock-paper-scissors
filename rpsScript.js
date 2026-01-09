function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice === 0) {
        return "rock"
    }   else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?")
    return humanChoice
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        switch (true) {
            case (humanChoice == "rock" && computerChoice == "rock"):
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. Tie. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "rock" && computerChoice == "paper"):
                computerScore++;
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. You lose. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "rock" && computerChoice == "scissors"):
                humanScore++;
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. You win. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "paper" && computerChoice == "rock"):
                humanScore++;
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. You win. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "paper" && computerChoice == "paper"):
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. Tie. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "paper" && computerChoice == "scissors"):
                computerScore++;
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. You lose. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "scissors" && computerChoice == "rock"):
                computerScore++;
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. You lose. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "scissors" && computerChoice == "paper"):
                humanScore++;
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. You win. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            case (humanChoice == "scissors" && computerChoice == "scissors"):
                console.log (`You picked ${humanChoice}. CPU picked ${computerChoice}. Tie. You: ${humanScore}, CPU: ${computerScore}`)
                break;
            default:
                computerScore++
                console.log (`Invalid input. CPU gets automatic point increment. You: ${humanScore}, CPU: ${computerScore}`);
        }
    }
    playRound();
    playRound();
    playRound();
}

playGame();

/*
const container = document.querySelector(".container");
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button")

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);

buttonRock.textContent = "Rock!";
buttonPaper.textContent = "Paper!";
buttonScissors.textContent = "Scissors!";


buttonPaper.addEventListener("click", () => {
    console.log("You picked paper.");
    let computerChoice = Math.floor(Math.random()*3)

});
*/