const container = document.querySelector(".container");
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const display = document.createElement("div");
const displayText = document.createElement("h3");
const displayScore = document.createElement("h1");
const displayWinner = document.createElement("h2");
const buttonRestart = document.createElement("button");
const buttonPlay = document.createElement("button");
const buttons = document.createElement("div");
const totalScore = document.createElement("h2");

container.appendChild(buttonPlay);
container.appendChild(totalScore);
container.appendChild(display);
display.appendChild(buttons);
display.appendChild(displayScore);
display.appendChild(displayText);
display.appendChild(displayWinner);

let humanScore = 0;
let computerScore = 0;
let totalWins = 0;
let totalLose = 0;
let totalGames = 0;

buttonPlay.textContent = "New Game";
buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";
buttonRestart.textContent = "Play Again";

displayText.setAttribute('style', 'white-space: pre;')
buttonPlay.setAttribute('style', 'margin-bottom: 8px;')

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

function playGame(humanChoice) {

    function playRound(computerChoice) {
        computerChoice = getComputerChoice();
        switch (true) {
            case (humanChoice == "rock" && computerChoice == "rock"):
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. Tie.\r\n`)
                break;
            case (humanChoice == "rock" && computerChoice == "paper"):
                computerScore++;
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. You lose.\r\n`)
                break;
            case (humanChoice == "rock" && computerChoice == "scissors"):
                humanScore++;
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. You win.\r\n`)
                break;
            case (humanChoice == "paper" && computerChoice == "rock"):
                humanScore++;
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. You win.\r\n`)
                break;
            case (humanChoice == "paper" && computerChoice == "paper"):
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. Tie.\r\n`)
                break;
            case (humanChoice == "paper" && computerChoice == "scissors"):
                computerScore++;
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. You lose.\r\n`)
                break;
            case (humanChoice == "scissors" && computerChoice == "rock"):
                computerScore++;
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. You lose.\r\n`)
                break;
            case (humanChoice == "scissors" && computerChoice == "paper"):
                humanScore++;
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. You win.\r\n`)
                break;
            case (humanChoice == "scissors" && computerChoice == "scissors"):
                displayText.textContent += (`You picked ${humanChoice}. CPU picked ${computerChoice}. Tie.\r\n`)
                break;
            default:
                computerScore++
                displayText.textContent += (`Invalid input. CPU gets automatic point increment.\r\n`);
        }
        displayScore.textContent = `You have ${humanScore} points. CPU has ${computerScore} points.`
        if (humanScore >= 5) {
            displayWinner.textContent = "You win!"
            totalWins++;
            totalGames++;
            totalScore.textContent = `You have played ${totalGames} total games. You have won ${totalWins} times and the CPU has won ${totalLose} times.`
            buttons.removeChild(buttonRock);
            buttons.removeChild(buttonPaper);
            buttons.removeChild(buttonScissors);
            display.appendChild(buttonRestart).focus();
        } else if (computerScore >= 5) {
            displayWinner.textContent = "You lose."
            totalLose++;
            totalGames++;
            totalScore.textContent = `You have played ${totalGames} total games. You have won ${totalWins} times and the CPU has won ${totalLose} times.`
            buttons.removeChild(buttonRock);
            buttons.removeChild(buttonPaper);
            buttons.removeChild(buttonScissors);
            display.appendChild(buttonRestart).focus();
        }
    }
    playRound();
}

buttonPlay.addEventListener("click", () => {
    totalWins = 0;
    totalLose = 0;
    totalGames = 0;
    totalScore.textContent = `You have played ${totalGames} total games. You have won ${totalWins} times and the CPU has won ${totalLose} times.`
    buttons.appendChild (buttonRock);
    buttons.appendChild (buttonPaper);
    buttons.appendChild (buttonScissors);
    displayText.textContent = "";
    displayScore.textContent = "";
    displayWinner.textContent = "";
    humanScore = 0; computerScore = 0;
    if (display.contains(buttonRestart)) {
        display.removeChild(buttonRestart);
    }
})
buttonRock.addEventListener("click", () => {
    const humanChoice = "rock"
    return playGame(humanChoice)
})
buttonPaper.addEventListener("click", () => {
    const humanChoice = "paper"
    return playGame(humanChoice)
})
buttonScissors.addEventListener("click", () => {
    const humanChoice = "scissors"
    return playGame(humanChoice)
})
buttonRestart.addEventListener("click", () => {
    displayText.textContent = "";
    displayWinner.textContent = "";
    buttons.appendChild (buttonRock);
    buttons.appendChild (buttonPaper);
    buttons.appendChild (buttonScissors);
    humanScore = 0; computerScore = 0;
    displayScore.textContent = `You have ${humanScore} points. CPU has ${computerScore} points.`;
    display.removeChild(buttonRestart)
})
