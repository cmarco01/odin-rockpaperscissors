


function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    randomInt = Math.floor(Math.random() * 3);
    // console.log(options[randomInt]); // prints 0, 1, or 2
    let choice = options[randomInt];
    //console.log("\t\t\t\tComputer has " + choice);
    return choice;
}

function getPlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    let winState = playRound(playerChoice, computerChoice, roundNum);
    roundNum +=1;
    calculateResults(winState);
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

    // console.log ("winState:  " + winState);

    let sendWinState = winState;
    // Need to get this before the switch statement, or else winState may
    // not update/be inaccurate to send
    // console.log("SendwinState:  " + sendWinState);

    switch (winState) {
        
        case winState = "win":
            console.log("You win Round " + roundNum + "! "  + playerChoice + " beats " + computerChoice);
            break;

        case winState = "lose":
            console.log("You lose Round " + roundNum + "! " + computerChoice + " beats " + playerChoice);
            break;

        default:
            console.log("Round " + roundNum + " is a tie! You both had " + playerChoice);
            break;
    }

    return sendWinState;
}


function calculateResults(winState) {
    // winState will equal "win", "loss", or "tie"
    let outcome = "";
    if (gameOver == false) {
        if (winState == "tie") {
            outcome = "You tied this round!"
            ties += 1;
        } else if (winState == "win") {
            outcome = "You win this round!";
            wins += 1;
        } else if (winState == "lose") {
            outcome = "You lost this round!";
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



function playGame() {
    let getWinState = "";
    let wins = 0;
    let losses = 0;
    let ties = 0;



    for (let i = 0; i < 1; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let roundNum = i + 1;
        // console.log(roundNum);
        getWinState = playRound(playerChoice, computerChoice, roundNum);
        // console.log("getWinState:  " + getWinState);
        if (getWinState == "tie") {
            ties += 1;
            //console.log("TIE")
        } else if (getWinState == "win") {
            wins += 1;
            //console.log("WIN")
        } else if (getWinState == "lose") {
            losses += 1;
            //console.log("LOSE")
        } 

        getWinState = "";

        console.log("\nSTATS:");
        console.log("Number of wins: " + wins);
        console.log("Number of losses: " + losses);
        console.log("Number of ties: " + ties);
        console.log("~~~~~~~~~~~~~~~~~~~~~~")
    }

    if (wins > losses) {
        console.log("\nYou WIN the best-of-5 series! Eat trash, computer!")
    } else if (wins < losses) {
        console.log("\nYou LOSE the best-of-5 series! Humanity is disappointed in you.")
    } else {
        console.log("\nYou TIE the best-of-5 series! I guess humans and computers are equal after all.")
    }

    console.log("\nSTATS:");
    console.log("Number of wins: " + wins);
    console.log("Number of losses: " + losses);
    console.log("Number of ties: " + ties);
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


/*
we have all the divs.
just need to update them based on results.


displaying results:
1) in HTML, create a div id=results. this will be the main results container
2) using same for loop code, define the new div result elements before the loop
    (like div your-wins, div cp-wins, div win-state, div final-winner)
3) before loop, define gameOver = false. set to true once wins or losses = 5,
    and break the loop.
3a) in which case, it might need to be changed to a 'while' loop
4) if game_over = true:
    if wins = 5, player wins. update div final-winner accordingly
    if losses = 5, computer wins. update div final-winner accordingly

*/