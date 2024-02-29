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

function playRound(playerSelection, computerSelection) {

    const playerSelectionTrans = 
        playerSelection.substr(0, 1).toUpperCase() 
        + playerSelection.substr(1).toLowerCase();

    if (playerSelectionTrans == computerSelection) {
        return "You tied!";
    }

    let result;

    switch (playerSelectionTrans) {

        case "Rock":
            switch (computerSelection) {
                case "Paper":
                    result = "lose";
                    break;
                case "Scissors":
                    result = "win";
                    break;
                default:
                    console.error(`Unexpected value ${computerSelection}`);
                    return "";
            }
            break;

        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    result = "win";
                    break;
                case "Scissors":
                    result = "lose";
                    break;
                default:
                    console.error(`Unexpected value ${computerSelection}`);
                    return "";
            }
            break;

        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    result = "lose";
                    break;
                case "Paper":
                    result = "win";
                    break;
                default:
                    console.error(`Unexpected value ${computerSelection}`);
                    return "";
            }
            break;

        default:
            console.error(`Unexpected value ${playerSelectionTrans}`);
            return "";
    }

    return (result == "win") ?
        `You win! ${playerSelectionTrans} beats ${computerSelection}` :
        `You lose! ${computerSelection} beats ${playerSelectionTrans}`;

}

console.log(playRound("Rock", "Scissors"));
console.log(playRound("pAPer", "Scissors"));
console.log(playRound("scissors", "Scissors"));