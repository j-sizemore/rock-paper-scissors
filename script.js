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
            return "";
    }
}

console.log(getComputerChoice());