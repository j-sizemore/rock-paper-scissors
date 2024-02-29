// get computer choice of Rock, Paper, or Scissors
function getComputerChoice() {

    // random number on [0, 2]
    const randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            console.error(`Unexpected value ${randNum}`);
            return "";
    }
}

// validate input (false = invalid, true = valid)
function isValid(inputValue) {
    if (
        inputValue == "Rock" 
        || inputValue == "Paper" 
        || inputValue == "Scissors" 
    ) {
        return true;
    }    
    console.error(`Unexpected player selection ${inputValue}`);
    return false;
}

function playRound(playerSelection, computerSelection) {

    const playerSelectionTrans = 
        playerSelection.substr(0, 1).toUpperCase() 
        + playerSelection.substr(1).toLowerCase();

    // validate input
    if (!(isValid(playerSelectionTrans) && isValid(computerSelection))) {
        return "";
    }

    // check for tie
    if (playerSelectionTrans == computerSelection) {
        return "You tied!";
    }

    // playerWin = true if player wins, false if player loses
    let playerWin;

    const choices = [
        {value:"Rock", beats:"Scissors"},
        {value:"Scissors", beats:"Paper"},
        {value:"Paper", beats:"Rock"}
    ];

    for (let choice of choices) {
        if (playerSelectionTrans == choice.value) {
            playerWin = (computerSelection == choice.beats);
            break;
        }
    }

    // return message
    return playerWin ?
        `You win! ${playerSelectionTrans} beats ${computerSelection}` :
        `You lose! ${computerSelection} beats ${playerSelectionTrans}`;

}

// play 5 rounds and determine winner and loser
function playGame() {
    const rounds = 5;
    let playerScore, computerScore;

    playerScore = 0;

    for (let i = 0; i < rounds; i++) {

        // get player choice first so they don't cheat!
        let playerChoice = prompt('Choose "Rock", "Paper", or "Scissors"');
        let computerChoice = getComputerChoice();

        // determine round winner
        let roundMessage = playRound(playerChoice, computerChoice);
        console.log(roundMessage);

        // increment player score if they won
        if (roundMessage.indexOf("You win") > -1) {
            playerScore++;
        }

    }

    computerScore = rounds - playerScore;
    console.log("Final score:");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You won! :)");
    } else if (playerScore < computerScore) {
        console.log("You lost! :(");
    } else {
        console.log("You tied!");
    }

    return;
}