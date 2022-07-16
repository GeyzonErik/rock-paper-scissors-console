const options = ["rock", "paper", "scissor"];
const gameInfos = {
    playerPoints: 0,
    playerOption: undefined,
    computerPoints: 0,
    computerOption: undefined,
    roundStatus: undefined,
    turnsLeft: 5,
}

function computerPlay() {
    return options[parseInt(Math.random() * options.length)];
}

function playerPlay() {
    let playerSelected = prompt(`Say: ${options.map(options => ` ${options}`)}. \nYou have: ${gameInfos.turnsLeft + 1} rounds left`).toLowerCase();

    while(!playerSelected || (playerSelected != 'rock' && playerSelected != 'paper' && playerSelected != 'scissor')){
        alert("Round not valid \nPlease type an option");
        playerSelected = prompt(`Say: ${options.map(options => ` ${options}`)}. \nYou have: ${gameInfos.turnsLeft + 1} rounds left`).toLowerCase();
    }
    return playerSelected;
}

function playRound() {
    if(gameInfos.playerOption == gameInfos.computerOption) {
        return "tie";
    }
    else if(gameInfos.playerOption == "rock") {
        return (gameInfos.computerOption == "paper") ? "Computer Win!" : "Player Win!"
    }
    else if(gameInfos.playerOption == "paper") {
        return (gameInfos.computerOption == "scissor") ? "Computer Win!" : "Player Win!"
    }
    else if(gameInfos.playerOption == "scissor") {
        return (gameInfos.computerOption == "rock") ? "Computer Win!" : "Player Win!"
    }
}

function checkPoints() {
    if(gameInfos.roundStatus == "Player Win!") {
        return gameInfos.playerPoints++;
    }
    else if(gameInfos.roundStatus == "Computer Win!") {
        return gameInfos.computerPoints++ 
    }
}

function game() {
    for(let chance = gameInfos.turnsLeft; chance > 0; chance--) {
        gameInfos.turnsLeft--;
        gameInfos.playerOption = playerPlay();
        gameInfos.computerOption = computerPlay();
        gameInfos.roundStatus = playRound();
        checkPoints();
        console.table(gameInfos);
    }
    if(gameInfos.playerPoints > gameInfos.computerPoints) {
        return `End of game, player wins with: ${gameInfos.playerPoints} points`;
    }
    else if(gameInfos.playerPoints < gameInfos.computerPoints) {
        return `End of game, CPU wins with: ${gameInfos.computerPoints} points`;
    }
}

console.log(game());

