
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    randomInt = Math.floor(Math.random() * 3);
    let choice = options[randomInt];
    return choice;
}

function getPlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    let results = playRound(playerChoice, computerChoice, roundNum);
    roundNum +=1;
    winState = results[0];
    whyMsg = results[1];
    calculateResults(winState, whyMsg);
}

function playRound(playerChoice, computerChoice, roundNum) {
    // defaulting to "tie"
    // if none of these 'if' statements trigger, that means they're the same
    // and therefore it's a tie. boooo
    let winState = "tie";
    
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            winState = "lose";
        } else if (computerChoice == "scissors") {
            winState = "win";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            winState = "lose";
        } else if (computerChoice == "rock") {
            winState = "win";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            winState = "lose";
        } else if (computerChoice == "paper") {
            winState = "win";
        }
    }

    let sendWinState = winState;
    // Need to get this before the switch statement, or else winState may
    // not update/be inaccurate to send

    // To describe why the result eg. you lose, paper beats rock
    let whyMsg = "";

    // Keeping this here cuz I find it useful in console log.
    switch (winState) {
        
        case winState = "win":
            console.log("You win Round " + roundNum + "! "  + playerChoice + " beats " + computerChoice);
            whyMsg = playerChoice + " beats " + computerChoice;
            break;

        case winState = "lose":
            console.log("You lose Round " + roundNum + "! " + computerChoice + " beats " + playerChoice);
            whyMsg = computerChoice + " beats " + playerChoice;
            break;

        default:
            console.log("Round " + roundNum + " is a tie! You both had " + playerChoice);
            whyMsg = "You both had " + playerChoice;
            break;
    }

    return [sendWinState, whyMsg];
}

function calculateResults(winState, whyMsg) {
    // winState will equal "win", "loss", or "tie"
    let outcome = "";
    if (gameOver == false) {
        if (winState == "tie") {
            outcome = "You tied this round! " + whyMsg;
            ties += 1;
        } else if (winState == "win") {
            outcome = "You win this round! " + whyMsg;
            wins += 1;
        } else if (winState == "lose") {
            outcome = "You lost this round! " + whyMsg;
            losses += 1;
        }

        yourWins.textContent = "Your wins: " + wins;
        computerWins.textContent = "Computer wins: " + losses;
        numTies.textContent = "Ties: " + ties;
        roundOutcome.textContent = outcome;

    
        if (wins == 5) {
            finalWinner.textContent = "You win the game!";
            gameOver = true;
        } else if (losses == 5) {
            finalWinner.textContent = "You lost the game!";
            gameOver = true;
        }
    }

}

// Globals
let roundNum = 1;
let wins = 0;
let losses = 0;
let ties = 0;
let gameOver = false;

const results = document.querySelector("#results");

const yourWins = document.createElement("div");
const computerWins = document.createElement("div");
const numTies = document.createElement("div");
const roundOutcome = document.createElement("div");
const finalWinner = document.createElement("div");

yourWins.textContent = "Your wins: 0";
computerWins.textContent = "Computer wins: 0";
numTies.textContent = "Ties: 0";

finalWinner.style.fontSize = "32px";

results.appendChild(yourWins);
results.appendChild(computerWins);
results.appendChild(numTies);
results.appendChild(roundOutcome);
results.appendChild(finalWinner);
