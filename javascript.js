
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    randomInt = Math.floor(Math.random() * 3);
    // console.log(options[randomInt]); // prints 0, 1, or 2
    let choice = options[randomInt];
    console.log("\t\t\t\tComputer has " + choice);
    return choice;
}

function getPlayerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let validChoice = false;
    let choice = "";

    while (validChoice == false) {
        choice = prompt("Enter 'rock', 'paper', or 'scissors':  ").toLowerCase();
        choice.slice(" ");
        // console.log("player choice: " + choice);
        if (options.includes(choice) == false) {
            console.log("\t\t\t\tInvalid choice! Pick again.\n\t\t\t\t(case-sensitive)");
        } else {
            console.log("\t\t\t\tYou have " + choice)
            validChoice = true;
        }
    }
    return choice;
}

function playRound(playerChoice, computerChoice) {
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

    switch (winState) {
        
        case winState = "win":
            console.log("You win!" + playerChoice + " beats " + computerChoice);
            break;

        case winState = "lose":
            console.log("You lose! " + computerChoice + " beats " + playerChoice);
            break;

        default:
            console.log("It's a tie! You both had " + playerChoice);
            break;
    }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);