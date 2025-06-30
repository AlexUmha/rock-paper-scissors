let randNum = 0;
let compRock = "Computer chose rock. ";
let compScis = "Computer chose scissors. ";
let compPaper = "Computer chose paper. ";
let compTie = "It's a tie.";
let compLose = "You lose, haha! What a loser!";
let compWin = "You win. Good for you!";
let humanScore = 0;
let compScore = 0;

function rpsGame(input) {
    console.log("You chose " + input)
    if (input === "rock") {
        if (randNum === 0) {
            console.log(compRock + compTie)
        } else if (randNum === 1) {
            console.log(compPaper + compLose)
            compScore++;
        } else {
            console.log(compScis + compWin)
            humanScore++;
        }
    } else if (input === "paper") {
        if (randNum === 0) {
            console.log (compRock + compWin)
            humanScore++;
        } else if (randNum === 1) {
            console.log (compPaper + compTie)
        } else {
            console.log (compScis + compLose)
            compScore++;
        }
    } else if (input === "scissors") {
        if (randNum === 0) {
            console.log (compRock + compLose)
            compScore++;
        } else if (randNum === 1) {
            console.log (compPaper + compWin)
            humanScore++;
        } else {
            console.log (compScis + compTie)
        }
    } else {
        console.log ("There are three choices, dingus, just choose one. Since you wanna be dumb, you can lose this round.");
        compScore++;
    }
}
for (let i = 0; i < 5; i++) {
    randNum = Math.floor(Math.random()*3);
    let input = prompt("Rock, Paper, or Scissors?").toLowerCase();
    rpsGame(input);
    if (i === 4){
        console.log(`Final results: Your Score: ${humanScore}. | Bot score: ${compScore}.`)
        if (humanScore > compScore) {
            console.log("Wow, you did it! You are the ultimate winner.")
        } else if (humanScore < compScore) {
            console.log("Haha, you're a loser! Look everybody, point and laugh at the loser!")
        } else {
            console.log("wow, a tie, how boring.")
        }
    }
}