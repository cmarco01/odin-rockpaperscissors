// Globals
let roundNum = 1;


function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    randomInt = Math.floor(Math.random() * 3);
    // console.log(options[randomInt]); // prints 0, 1, or 2
    let choice = options[randomInt];
    //console.log("\t\t\t\tComputer has " + choice);
    return choice;
}

function getPlayerChoice(playerChoice) {
    // let options = ['rock', 'paper', 'scissors'];
    // let validChoice = false;
    // let choice = "";

    // while (validChoice == false) {
    //     choice = prompt("Enter 'rock', 'paper', or 'scissors':  ").toLowerCase();
    //     choice.slice(" ");
    //     // console.log("player choice: " + choice);
    //     if (options.includes(choice) == false) {
    //         console.log("\t\t\t\tInvalid choice! Pick again.\n\t\t\t\t(case-sensitive)");
    //     } else {
    //         console.log("\t\t\t\tYou have " + choice)
    //         validChoice = true;
    //     }
    // }
    // return choice;   

    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice, roundNum);
    roundNum +=1;
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

// const playerChoice = getPlayerChoice();
// const computerChoice = getComputerChoice();

// playRound(playerChoice, computerChoice);

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

// playGame();

/*
1) create 3 buttons- rock, paper, scissors
2) add an onclick event to each
3) when clicked, send the selection as an argument ("rock", "paper", "scissors")
4) in the function that receives that argument as a parameter,
    set the playerChoice to that argument
5) THEN, play the game w/ same logic

here's the order of things
1) player clicks button, calls function that sets playerChoice according to
    what button was pressed 
2) in that function at the end, it gets computerChoice (nothing changes)
3) then, like before, it calls playRound w/ those 2 variables


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