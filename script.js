const WINNING_SCORE = 5;

const buttons = document.querySelectorAll('button');
const playerChoiceField = document.querySelector('#player-choice');
const computerChoiceField = document.querySelector('#computer-choice');
const roundMessageField = document.querySelector('#round-message');
const playerScoreField = document.querySelector('#player-score');
const computerScoreField = document.querySelector('#computer-score');
const finalResultField = document.querySelector('#final-result');

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

// play round and update score fields
function updateScore(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();

    // determine round winners
    let roundMessage = playRound(playerChoice, computerChoice);

    // increment player score if they won
    if (roundMessage.indexOf("You win") > -1) {
        playerScore++;
    } else if (roundMessage.indexOf("You lose") > -1) {
        computerScore++;
    }

    // update text
    playerChoiceField.textContent = playerChoice;
    computerChoiceField.textContent = computerChoice;
    roundMessageField.textContent = roundMessage;
    playerScoreField.textContent = playerScore;
    computerScoreField.textContent = computerScore;

    // check if a player has score of 5
    if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        finalResultField.textContent = playerScore >= WINNING_SCORE ?
            "You won!"
            : "You lose :(";
        buttons.forEach((button) => {
            button.removeEventListener('click', updateScore);
        });
        return;
    }
}

// play until one player gets WINNING_SCORE points
let playerScore = 0;
let computerScore = 0;

function playGame() {
    buttons.forEach((button) => {
        button.addEventListener('click', updateScore);
    });
}

playGame();